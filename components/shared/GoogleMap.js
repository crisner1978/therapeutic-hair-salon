function GoogleMap() {
  return (
    <div className="h-[400px]">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3263.9689551672304!2d-89.9496566847568!3d35.107486080331995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x887f86c1a0395431%3A0xf9c6d369bedf7da2!2s3449%20Park%20Ave%20%23102%2C%20Memphis%2C%20TN%2038111!5e0!3m2!1sen!2sus!4v1638194658331!5m2!1sen!2sus"
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
      ></iframe>
    </div>
  );
}

export default GoogleMap;
