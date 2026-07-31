import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const scriptUrl = process.env.GOOGLE_APPS_SCRIPT_URL;

    if (!scriptUrl) {
      return NextResponse.json(
        { error: 'Google Apps Script URL is missing in environment variables.' },
        { status: 500 }
      );
    }

    // Standardized payload with site identification
    const payload = {
      siteName: 'Caregiving Governance',
      fullName: body.fullName,
      email: body.email,
      phone: body.phone,
      details: body.details,
    };

    const response = await fetch(scriptUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    });

    if (!response.ok) {
      throw new Error('Failed to submit to Google Apps Script');
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Submission error:', error);
    return NextResponse.json(
      { error: 'Failed to process consultation request.' },
      { status: 500 }
    );
  }
}