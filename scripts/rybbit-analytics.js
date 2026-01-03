// Rybbit Analytics Integration
(function() {
  // Create the script element
    const script = document.createElement('script');
    script.src = 'https://app.rybbit.io/api/script.js';
    script.async = true;
    script.defer = true;
    script.setAttribute('data-site-id', '5255b32b1abe'); // Replace with your actual Site ID

    // Append the script to the document head
    document.head.appendChild(script);
})();