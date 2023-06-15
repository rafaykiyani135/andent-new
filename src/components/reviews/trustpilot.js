import React from 'react';
const TrustBox = () => {
  // Create a reference to the <div> element which will represent the TrustBox
  const ref = React.useRef(null);
  React.useEffect(() => {
// If window.Trustpilot is available it means that we need to load the TrustBox from our ref.
// If it's not, it means the script you pasted into <head /> isn't loaded  just yet.
// When it is, it will automatically load the TrustBox.
if (window.Trustpilot) {
  window.Trustpilot.loadFromElement(ref.current, true);
}
  }, []);
  return (
<div
  ref={ref} // We need a reference to this element to load the TrustBox in the effect.
 className="trustpilot-widget" // Renamed this to className.
 // [ long list of data attributes...]
 data-template-id="53aa8912dec7e10d38f59f36"
 data-businessunit-id="53da56ff0000640005792dae"
 data-locale="en-US" 
 data-style-height="150px"
 data-style-width="100%"
 data-theme="light"
 data-stars="5"
>
  <a href="https://www.trustpilot.com/review/andent.al" rel="noopener"> Trustpilot
  </a>
</div>
  );
};
export default TrustBox;