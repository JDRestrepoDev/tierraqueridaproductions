# Google Sheets Integration Setup

This project now supports pulling gigs and gallery data from Google Sheets. Here's how to set it up:

## Google Sheets Setup

### 1. Create Your Spreadsheet
- Create a new Google Spreadsheet
- Make sure it's publicly accessible (View permissions for "Anyone with the link")
- Update the `SPREADSHEET_ID` in `/src/data/sheets.ts` with your spreadsheet ID

### 2. First Tab - Gigs Data
Create a tab named "Gigs" with the following columns:
- **A**: id (number)
- **B**: title (text)
- **C**: date (text, format: "March 15, 2024")
- **D**: location (text)
- **E**: time (text, format: "7:00 PM - 10:00 PM")
- **F**: price (text, format: "$25" or "Free")
- **G**: link (text, optional - URL for tickets/booking)

Example data:
```
id	title	date	location	time	price	link
1	Spring Latin Festival	March 15, 2024	Bayfront Park, Miami	7:00 PM - 10:00 PM	$25	https://example.com/tickets
2	Corporate Gala	April 22, 2024	Convention Center, Orlando	6:30 PM - 11:00 PM	$50	
```

### 3. Second Tab - Gallery Data
Create a tab named "Gallery" with the following columns:
- **A**: id (number)
- **B**: title (text)
- **C**: location (text)
- **D**: cover_image (text - path to main image)
- **E**: image_1 (text - path to additional image)
- **F**: image_2 (text - path to additional image)
- **G**: image_3 (text - path to additional image)

Example data:
```
id	title	location	cover_image	image_1	image_2	image_3
1	Colombian Independence Day	Miami, FL	/src/assets/images/gigs/1.jpg	/src/assets/images/gigs/2.jpg	/src/assets/images/gigs/3.jpg	/src/assets/images/gigs/4.jpg
2	Latin Music Festival	Orlando, FL	/src/assets/images/gigs/2.jpg	/src/assets/images/gigs/4.jpg	/src/assets/images/gigs/1.jpg	
```

## How It Works

1. **Data Fetching**: The app fetches data from Google Sheets using CSV export URLs (no API key required)
2. **Caching**: Data is cached for 5 minutes to avoid excessive requests
3. **Fallback**: If Google Sheets is unavailable, the app uses fallback data
4. **Loading States**: Components show loading skeletons while fetching data
5. **Browser Compatible**: Uses standard fetch API, no Node.js dependencies

## Configuration

Update the spreadsheet ID in `/src/data/sheets.ts`:
```typescript
const SPREADSHEET_ID = 'YOUR_SPREADSHEET_ID_HERE'
```

## Testing

The integration will automatically work when you:
1. Make your spreadsheet publicly accessible
2. Add data to the "Gigs" and "Gallery" tabs
3. Visit your website - it will fetch and display the data

## Features

- ✅ **Dynamic Gigs**: Pull gig data from Google Sheets
- ✅ **Dynamic Gallery**: Pull gallery data from Google Sheets  
- ✅ **Link Support**: Gigs can have ticket/booking links
- ✅ **Caching**: 5-minute cache to reduce API calls
- ✅ **Fallback Data**: Graceful degradation if Sheets unavailable
- ✅ **Loading States**: Smooth loading experience
- ✅ **Type Safety**: Full TypeScript support

## Troubleshooting

1. **Permission Issues**: Make sure the spreadsheet is publicly accessible
2. **API Limits**: Google Sheets API has rate limits (100 requests per 100 seconds per user)
3. **Network Issues**: The app will fall back to static data if Sheets is unavailable
4. **Data Format**: Ensure your data matches the expected column structure

## Security Note

Since this uses public Google Sheets API, make sure your spreadsheet only contains data you want to be publicly accessible. Do not store sensitive information in the spreadsheet.
