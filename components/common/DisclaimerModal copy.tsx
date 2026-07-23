"use client";

import { useEffect } from "react";

declare global {
  interface Window {
    bootstrap: any;
  }
}

export default function DisclaimerModal() {
  useEffect(() => {
    const timer = setTimeout(() => {
      const modalEl = document.getElementById("disclaimerModal");

      if (modalEl && window.bootstrap) {
        const modal = new window.bootstrap.Modal(modalEl, {
          backdrop: "static",
          keyboard: false,
        });

        modal.show();
      }
    }, 5000); // 5 sec

    return () => clearTimeout(timer);
  }, []);

  return (
    <div
      className="modal fade"
      id="disclaimerModal"
      tabIndex={-1}
      aria-hidden="true"
    >
      <div className="modal-dialog modal-dialog-centered modal-xl">
        <div className="modal-content">
          <div className="modal-body p-4 p-lg-5">
            <h1 className="display-3 fw-bold text-center mb-4">DISCLAIMER</h1>

            <p>
              This is to inform you that www.varshagroup.in is the only official
              website of Varsha Group. Users are advised not to rely on
              information available on any other website, platform, or source
              that may appear similar to or represent Varsha Group. All plans,
              specifications, images, amenities, facilities, project details,
              and visuals displayed on this website are indicative in nature and
              subject to change without prior notice and necessary approvals.
              The information provided herein does not constitute an offer,
              invitation to offer, or legal commitment of any nature. Users are
              requested to independently verify all project details, approvals,
              pricing, specifications, amenities, and terms with the authorized
              sales team and relevant regulatory authorities before making any
              decision. While every effort is made to ensure the accuracy of the
              information on this website, Varsha Group shall not be liable for
              any loss, damage, or claim arising from reliance on the
              information provided herein.
            </p>

            <div className="text-center mt-4">
              <button
                type="button"
                className="btn btn-lg px-5 rounded-pill text-white"
                style={{
                  background: "linear-gradient(135deg,#ff481f,#ff6b47)",
                }}
                data-bs-dismiss="modal"
              >
                I Agree
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
