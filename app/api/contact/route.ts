import { NextResponse } from 'next/server'

export async function POST(req: Request) {
  try {
    const data = await req.json()

    // Validate required fields
    if (!data.name || !data.phone || !data.email || !data.serviceType) {
      return NextResponse.json(
        { success: false, statusCode: 400, message: 'Missing required fields' },
        { status: 200 }
      )
    }

    const GOOGLE_SCRIPT_BASE_URL = process.env.REACT_APP_GOOGLE_SHEET_URL
    const GOOGLE_SCRIPT_ID = process.env.REACT_APP_GOOGLE_SHEET_ID

    if (!GOOGLE_SCRIPT_BASE_URL || !GOOGLE_SCRIPT_ID) {
      return NextResponse.json(
        { success: false, statusCode: 500, message: 'Server config error' },
        { status: 200 }
      )
    }

    const GOOGLE_SCRIPT_URL = `${GOOGLE_SCRIPT_BASE_URL}/${GOOGLE_SCRIPT_ID}/exec`

    // Gửi data sang Google Sheet
    const sheetRes = await fetch(GOOGLE_SCRIPT_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: data.name,
        phone: data.phone,
        email: data.email,
        serviceType: data.serviceType,
        message: data.message,
        status: 'new',
      }),
    })

    if (!sheetRes.ok) {
      throw new Error('Failed to write to Google Sheet')
    }

    return NextResponse.json({
      success: true,
      statusCode: 201,
      message: 'Saved to Google Sheet',
    }, { status: 200 })
  } catch (error) {
    console.error(error)
    return NextResponse.json(
      { success: false, statusCode: 500, message: 'Server error' },
      { status: 200 }
    )
  }
}