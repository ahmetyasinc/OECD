export default function DownloadPage() {
  return (
    <div style={{ fontFamily: 'Arial, sans-serif', padding: '40px', maxWidth: '800px', margin: '0 auto' }}>
      <h1 style={{ fontSize: '32px', marginBottom: '20px' }}>OECD Internship Assessment</h1>
      
      <p style={{ fontSize: '16px', lineHeight: '1.6' }}>
        You are about to download the assessment file for the OECD Internship Program. <br /><br />
        <strong>This is a general evaluation test</strong> designed to assess your suitability for the internship. 
        The test has a strict time limit of <strong>20 minutes</strong> and must be completed without any external assistance.
      </p>

      <ul style={{ fontSize: '16px', lineHeight: '1.8', paddingLeft: '20px', marginTop: '20px' }}>
        <li>Going back to previous questions is not allowed.</li>
        <li>Cheating in any form is strictly prohibited.</li>
        <li>If any misconduct is detected, your assessment will be considered invalid.</li>
        <li>Your camera must remain active throughout the exam session.</li>
        <li>The exam must be taken on a desktop or laptop. Mobile or tablet devices are not allowed.</li>
        <li>Ensuring camera functionality is your own responsibility. Technical failures on your end will not be accepted as a valid excuse.</li>
        <li>Your internet speed and system performance must be sufficient to complete the exam without interruption. OECD is not responsible for any disconnection or lag during the test.</li>
        <li>Candidates who pass the evaluation will be invited for an interview stage.</li>
      </ul>

      <p style={{ fontSize: '16px', marginTop: '30px' }}>
        By downloading the exam file, you confirm that you have read and agreed to the above rules.
      </p>

      <div style={{ marginTop: '40px', textAlign: 'center' }}>
        <a href="/TheOECD_internship_assesment.zip" download style={{ textDecoration: 'none' }}>
          <button style={{
            padding: '12px 24px',
            fontSize: '16px',
            backgroundColor: '#005ea2',
            color: 'white',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer'
          }}>
            Download Exam File
          </button>
        </a>
      </div>
    </div>
  );
}
