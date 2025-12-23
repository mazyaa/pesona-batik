import React from "react";

const GoogleMapsEmbed = () => {
  return (
    <div
      className="w-full p-2 md:w-[600px] h-[350px] mx-10"
      data-aos="fade-left"
      data-aos-duration="1500"
    >
      <div className="w-full h-[400px] md:h-[480px] rounded-2xl overflow-hidden">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15820.505907183642!2d110.1143814!3d-7.8303942!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e7a572941908cd7%3A0x3c0934009987cbcb!2sPesona%20Batik%20Indonesia!5e0!3m2!1sid!2sid!4v1733800000000"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>
    </div>
  );
};

export default GoogleMapsEmbed;
