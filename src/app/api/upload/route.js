// src/app/api/upload/route.js

import fs from 'fs';
import path from 'path';
import { promisify } from 'util';
import { NextResponse } from 'next/server';

const writeFile = promisify(fs.writeFile);

export async function POST(req) {
  try {
    const formData = await req.formData();
    const file = formData.get('cvFile'); // Lấy file từ FormData

    if (!file) {
      return NextResponse.json({ error: 'No file uploaded' }, { status: 400 });
    }

    // Kiểm tra định dạng file
    const fileName = file.name;
    if (!fileName.toLowerCase().endsWith('.pdf')) {
      return NextResponse.json({ error: 'Only PDF files are allowed' }, { status: 400 });
    }

    // Chuyển file thành buffer
    const buffer = Buffer.from(await file.arrayBuffer());

    // Đường dẫn lưu file
    const uploadDir = path.join(process.cwd(), 'public', 'upload');
    if (!fs.existsSync(uploadDir)) {
      fs.mkdirSync(uploadDir, { recursive: true });
    }

    const filePath = path.join(uploadDir, fileName);
    await writeFile(filePath, buffer);

    return NextResponse.json({
      url: `/upload/${fileName}`,
      message: 'File uploaded successfully',
    }, { status: 200 });

  } catch (error) {
    console.error('Upload error:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}