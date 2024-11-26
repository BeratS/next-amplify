import pool from '@/lib/db';
import { NextRequest, NextResponse } from 'next/server'
 
export const dynamic = 'force-dynamic' // defaults to auto

type ResponseData = {
  message: string
}
 
export async function GET(
  req: NextRequest,
  res: NextResponse<ResponseData>
) {

  try {
    const { rows } = await pool.query('SELECT * FROM messages');
    res.status(200).json(rows);
  } catch (error) {
    res.status(500).json({ error: 'Database error' });
  }

  return NextResponse.json({ message: 'Hello from Next.js!' })
}
