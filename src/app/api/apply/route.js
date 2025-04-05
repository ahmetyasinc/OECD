import nodemailer from 'nodemailer';

export async function POST(request) {
  const data = await request.json();

  const { country, school, department, languages, name, email, phone } = data;

  const mailContent = `
    📘 Eğitim Bilgileri
    Ülke: ${country}
    Okul: ${school}
    Bölüm: ${department}

    🌍 Bildiği Diller
    ${languages.map((lang, i) => `${i + 1}. ${lang.lang} - ${lang.level}`).join('\n')}

    👤 Kişisel Bilgiler
    Ad Soyad: ${name}
    E-posta: ${email}
    Telefon: ${phone}
    `;

  console.log(mailContent)

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: "alivukuatli@gmail.com",
      pass: 'tcpq rwrf kkdz lsob'
    }
  });

  const mailOptions = {
    from: "alivukuatli@gmail.com",
    to: 'ahmetyasinc26@gmail.com',
    subject: 'Yeni Başvuru Yapıldı',
    text: mailContent
  };

  try {
    console.log("here")
    await transporter.sendMail(mailOptions);
    return new Response(JSON.stringify({ success: true }), { status: 200 });
  } catch (error) {
    console.error("Mail gönderme hatası:", error);
    return new Response(JSON.stringify({ success: false, error: "Mail gönderilemedi." }), { status: 500 });
  }
}

