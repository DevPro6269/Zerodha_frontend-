import React from 'react'

const Footer = () => {
  return (
    <>
    <br /> <br />
    <footer className='w-full bg-gray-100 '>
        <section className='container flex mx-auto justify-center gap-5' >
          <div className='w-1/4 flex-col flex gap-4 p-7 '>
           <img src="/images/logo.svg" alt="" className=' w-44' />
           <p>© 2010 - 2024, Zerodha Broking Ltd.
All rights reserved.</p>
            <p className='text-xl'><i class="fa-brands fa-x-twitter"></i> &nbsp; &nbsp; <i class="fa-brands fa-facebook"></i> &nbsp; &nbsp;
            <i class="fa-brands fa-instagram"></i> &nbsp; &nbsp; <i class="fa-brands fa-linkedin"></i> &nbsp; &nbsp;
             </p>
             <hr />
             <p className='text-xl'><i class="fa-brands fa-youtube"></i> &nbsp; &nbsp; <i class="fa-brands fa-whatsapp"></i> &nbsp; &nbsp;
             <i class="fa-brands fa-telegram"></i> &nbsp; &nbsp;
             </p>
          </div>
          <div className='w-1/5 flex flex-col gap-3 p-7'>
          <h1 className='text-xl'>Company</h1>
           <ul className='flex flex-col gap-1 text-slate-700'>
            <li> About</li>
            <li>Products</li>
            <li>Pricing</li>
            <li>Referral programme</li>
            <li>Careers</li>
            <li>Zerodha.tech</li>
            <li>Press & media</li>
            <li>Zerodha Cares (CSR)</li>
           </ul>
          </div>
          <div className='w-1/5 flex flex-col gap-3 p-7'>
          <h1 className='text-xl'>Support</h1>
           <ul className='flex flex-col gap-1 text-slate-700'>
            <li> Contact us</li>        
            <li>Support portal</li>
            <li>Z-Connect blog</li>
            <li>List of charges</li>
            <li>Downloads & resources</li>
            <li>Videos</li>
            <li>Market overview</li>
            <li>How to file a complaint?</li>
            <li>Status of your complaints</li>
           </ul>
          </div>
          <div className='w-1/5 flex flex-col gap-3 p-7'>
          <h1 className='text-xl '>Account</h1>
           <ul className='flex text-slate-700 flex-col gap-1'>
            <li>Open an account</li>
            <li>Fund transfer</li>
           </ul>
          </div>
        </section>

        <br /> 
        <section className='mx-auto justify-center  text-xs flex   text-slate-500'>
         <div className='w-4/5 flex-col flex gap-4  '>
<p>Zerodha Broking Ltd.: Member of NSE, BSE​ &​ MCX – SEBI Registration no.: INZ000031633 CDSL/NSDL: Depository services through Zerodha Broking Ltd. – SEBI Registration no.: IN-DP-431-2019 Commodity Trading through Zerodha Commodities Pvt. Ltd. MCX: 46025; NSE-50001 – SEBI Registration no.: INZ000038238 Registered Address: Zerodha Broking Ltd., #153/154, 4th Cross, Dollars Colony, Opp. Clarence Public School, J.P Nagar 4th Phase, Bengaluru - 560078, Karnataka, India. For any complaints pertaining to securities broking please write to complaints@zerodha.com, for DP related to dp@zerodha.com. Please ensure you carefully read the Risk Disclosure Document as prescribed by SEBI | ICFs</p>
        <p>Procedure to file a complaint on SEBI SCORES: Register on SCORES portal. Mandatory details for filing complaints on SCORES: Name, PAN, Address, Mobile Number, E-mail ID. Benefits: Effective Communication, Speedy redressal of the grievances</p>
        <p>Smart Online Dispute Resolution | Grievances Redressal Mechanism</p>
        <p>Investments in securities market are subject to market risks; read all the related documents carefully before investing.</p>
        <p>Attention investors: 1) Stock brokers can accept securities as margins from clients only by way of pledge in the depository system w.e.f September 01, 2020. 2) Update your e-mail and phone number with your stock broker / depository participant and receive OTP directly from depository on your e-mail and/or mobile number to create pledge. 3) Check your securities / MF / bonds in the consolidated account statement issued by NSDL/CDSL every month.</p>
        <p>"Prevent unauthorised transactions in your account. Update your mobile numbers/email IDs with your stock brokers. Receive information of your transactions directly from Exchange on your mobile/email at the end of the day. Issued in the interest of investors. KYC is one time exercise while dealing in securities markets - once KYC is done through a SEBI registered intermediary (broker, DP, Mutual Fund etc.), you need not undergo the same process again when you approach another intermediary." Dear Investor, if you are subscribing to an IPO, there is no need to issue a cheque. Please write the Bank account number and sign the IPO application form to authorize your bank to make payment in case of allotment. In case of non allotment the funds will remain in your bank account. As a business we don't give stock tips, and have not authorized anyone to trade on behalf of others. If you find anyone claiming to be part of Zerodha and offering such services, please create a ticket here.</p>
</div>
        </section>
        <br />
    </footer>
    </>
  )
}

export default Footer