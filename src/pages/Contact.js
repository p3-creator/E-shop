import React from 'react'

function Contact() {
  return (
    <div className='text-center'>
      <div className="py-5">
        <h4>Contact Us:</h4>
        <div className="pt-2"><i className="bi bi-telephone-fill px-1" /> 9801433555</div>
        <div className='d-flex gp pt-4 cnt'>
        <div><button className="btn5"><a href="https://www.linkedin.com/" alt=""><i className="bi bi-linkedin ln" /></a></button></div>
        <div><button className="btn5"><a href="https://www.pinterest.com/" alt=""><i className="bi bi-instagram ig" /></a></button></div>
        <div><button className="btn5"><a href="https://www.facebook.com/" alt=""><i className="bi bi-facebook fb" /></a></button></div>
        </div>
      </div>
        <div className='pb-5'>
          <h4 className='pt-5'>Address:</h4>
          <div className=''><i className="bi bi-geo-alt-fill" /> <span>Chabahil, Kathmandu, Nepal</span></div>
          </div>
    </div>

  )
}

export default Contact
