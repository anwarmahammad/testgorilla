// import React, { useMemo, useState } from 'react'

// const Salaries = () => {
//   const [count,setCount] = useState(0);
//   const [number,setNumber] = useState(5);
//   const Factorial = useMemo(()=>fact(number),[number]);
//   return (
//     <div classNameName="mt-5">
//       <div classNameName="text-center mt-5">

//     <h1 classNameName="reviews">
//       factorial={Factorial}
//       <br/>
//      hello= {number}
//       <br/>
//       <button onClick={() => setNumber(number+1)}>factorial</button>
//       <br/>
//       <button onClick={() => setCount(count+1)}>increment</button>
//       <br/>
//       Count value ={count}
//     </h1>

//       </div>
//     </div>
//   )
// }
// const fact = (n)=>{
//   let answer =1;
//   for(var i = n ; i >= 1 ; i--){
//     answer = answer * i;
//   }
//   console.log("this is a factorial");
//   return answer;
// }

// export default Salaries

import React from "react";
import { Link } from "react-router-dom";
import './Home.css'

const Salaries = () => {
  return (
    <div className="back-bg">
      {/* text start */}
      {/* this is a first row--------------------------------------------------------------------------------- */}
      <div className="row justify-content-center  margins-top">
        <div className="col-md-4">
          <div className="border-0 mb-3 col-md-9 padding-top ">
            <Link
              to="/Salaries"
              type="button"
              className="border-0 btn card d-flex justify-content-between  border-bottom-0 pt-3 pb-2 headers atm-2  over-button radius-btn1  "
            >
              <p className="text-left ">Terms of use <i class="fas fa-greater-than greater-padding ml-2 "></i></p>
              
            </Link>

            <Link
              to="/Privac"
              type="button"
              className="border-0 btn card justify-content-between   border-top-0 border-bottom-0 pt-3 pb-2 headers radius-btn atm-2"
            >
              <p className="text-left "> Privacy policy <i class="fas fa-greater-than greater-padding  "></i></p>
            </Link>
            <Link
              to="/Cookies"
              type="button"
              className="border-0 btn card  justify-content-between border-top-0 pt-3 pb-2 headers radius-btn2 atm-2"
            >
              <p className="text-left "> Cookie policy  <i class="fas fa-greater-than greater-padding  "></i></p>
            </Link>
          </div>
        </div>

        <div className="col-md-6 col-9 mt-3">
          <h2 className="Terms-head">Terms of Use</h2>
          <br />

          <p>
            Last updated June 16, 2021.
            <br />
            <br />
            These Terms of Use (“Terms”, “Terms of Use”) govern your
            relationship between you and TestGorilla B.V. (“TestGorilla”, “us”,
            “we”, or “our”, a Dutch limited liability company registered with
            the Trade Register of the Chamber of Commerce under no. 77597249) in
            relation to the use of https://www.testgorilla.com website (the
            “Service”) as operated by TestGorilla.
            <br />
            <br />
            These Terms of Use are applicable to visitors, users, and others who
            access or use the Service.
            <br />
            <br />
            Your access to and use of the Service is conditioned on your
            acceptance of and compliance with these Terms. By accessing or using
            the Service you agree to be bound by these Terms. If you disagree
            with any part of the Terms, then you may not access the Service.
          </p>
        </div>
      </div>

      {/* this is a second row--------------------------------------------------------------------------------- */}

      <div className="row justify-content-center">
        <div className="col-4"></div>
        <div className="col-md-6 col-9 mt-3">
          <div className="d-flex">
            <h4 className="Terms-head number-bg">1. </h4>
            <h4 className="Terms-head ml-2"> Eligibility</h4>
          </div>
          <br />

          <p>
            In order to use the Service, you must: a. be at least eighteen (18)
            years old and able to legally undergo contractual obligations;
            <br />
            b. complete the registration process;
            <br />
            c. agree to these Terms;
            <br />
            d. provide true, complete, and up-to-date contact and billing
            information; and
            <br />
            e. not be – either individually or as part of a group, entity or
            state, subject to EU, US and UN sanctions, embargoes, and bans that
            prohibit the use of this Service By using the Service, you represent
            and warrant that you meet all the requirements listed above, and
            that you won’t use the Service in a way that violates any laws or
            regulations. Note that by representing and warranting, you are
            making a legally enforceable promise. TestGorilla may refuse
            service, close accounts of any users, and change eligibility
            requirements at any time.
          </p>
        </div>
      </div>

      {/* this is a 3rd row--------------------------------------------------------------------------------- */}

      <div className="row justify-content-center">
        <div className="col-4"></div>
        <div className="col-md-6 col-9 mt-3">
          <div className="d-flex">
            <h4 className="Terms-head number-bg">2. </h4>
            <h4 className="Terms-head ml-2"> Subscriptions</h4>
          </div>
          <br />

          <p>
            Some parts of the Service are billed on a subscription basis
            (“Subscription(s)”). You will be billed in advance on a recurring
            and periodic basis (“Billing Cycle”). Billing Cycles are set either
            on a monthly or annual basis, depending on the type of subscription
            plan you select when purchasing a Subscription. A minimum number of
            Billing Cycles may apply to a Subscription.
            <br />
            <br />
            At the end of each Billing Cycle, your Subscription will
            automatically renew under the exact same conditions unless you
            cancel it or TestGorilla cancels it. You may cancel your
            Subscription renewal either through your online account settings
            page or by contacting TestGorilla’s customer support team, taking
            into account a notice period of at least 30 days.
            <br />
            <br />A valid payment method, including a credit card or PayPal, is
            required to process the payment for your Subscription. You shall
            provide TestGorilla with accurate and complete billing information
            including full name, address, state, zip code, country, telephone
            number, and a valid payment method. By submitting such payment
            information, you automatically authorize TestGorilla to charge all
            Subscription fees incurred through your account to any such payment
            instruments.
          </p>
        </div>
      </div>

      {/* this is a 4rth row--------------------------------------------------------------------------------- */}

      <div className="row justify-content-center">
        <div className="col-4"></div>
        <div className="col-md-6 col-9 mt-3">
          <div className="d-flex">
            <h4 className="Terms-head number-bg">3. </h4>
            <h4 className="Terms-head ml-2"> Free Plan</h4>
          </div>
          <br />

          <p>
            TestGorilla may, at its sole discretion, offer a Subscription free
            of charge (a “Free” plan). You will not be charged by TestGorilla
            for using the Free plan.
            <br />
            <br />
            At any time and without notice, TestGorilla reserves the right to
            (i) modify the terms of use of the Free plan offer, or (ii) cancel
            such Free plan offer.
          </p>
        </div>
      </div>

      {/* this is a 5th row--------------------------------------------------------------------------------- */}

      <div className="row justify-content-center">
        <div className="col-4"></div>
        <div className="col-md-6 col-9 mt-3">
          <div className="d-flex">
            <h4 className="Terms-head number-bg">4. </h4>
            <h4 className="Terms-head ml-2"> Fee Changes</h4>
          </div>
          <br />

          <p>
            TestGorilla, in its sole discretion and at any time, may modify the
            Subscription fees for the Subscriptions. Any Subscription fee change
            shall become effective at the end of the then-current Billing Cycle.
            <br />
            <br />
            TestGorilla shall provide you with reasonable prior notice of any
            change in Subscription fees to give you an opportunity to terminate
            your Subscription before such modifications become effective.
            <br />
            <br />
            Your continued use of the Service after the modification of the
            Subscription fee comes into effect constitutes your agreement to pay
            the modified Subscription fee amount.
          </p>
        </div>
      </div>

      {/* this is a 6th row--------------------------------------------------------------------------------- */}

      <div className="row justify-content-center">
        <div className="col-4"></div>
        <div className="col-md-6 col-9 mt-3">
          <div className="d-flex">
            <h4 className="Terms-head number-bg">5. </h4>
            <h4 className="Terms-head ml-2">
              {" "}
              Content licensing and intellectual propertyFee Changes
            </h4>
          </div>
          <br />

          <p>
            Our Service allows you to post, link, store, share, and otherwise
            make available certain information, text, graphics, videos, or other
            material (“Content”). You are responsible for the Content that you
            post to the Service, including its lawfulness, reliability,
            accuracy, and appropriateness.
            <br />
            <br />
            You, as the creator of the Content you post, submit, and display on
            or through the Service, retain any and all intellectual property
            rights on said Content. As the sole right owner, you have the
            responsibility to protect these rights. We hereby acknowledge that
            the posting or displaying of this Content on the Service does not in
            any way amount to an implied license or to a consent to use the
            Content on behalf of third parties. We will therefore abstain from
            using this Content in any way except with your explicit written
            authorization.
            <br />
            <br />
            You represent and warrant that: (i) the Content is yours (you own
            it) or you possess the legal right to use it, and (ii) the posting
            of your Content on or through the Service does not violate the data
            protection and privacy rights, copyrights, or other intellectual
            property rights, contractual rights or any other rights of any third
            person.
          </p>
        </div>
      </div>

      {/* this is a 7th row--------------------------------------------------------------------------------- */}

      <div className="row justify-content-center">
        <div className="col-4"></div>
        <div className="col-md-6 col-9 mt-3">
          <div className="d-flex">
            <h4 className="Terms-head number-bg">6. </h4>
            <h4 className="Terms-head ml-2"> Authorized use of the Service</h4>
          </div>
          <br />

          <p>
            You may only use the Service for lawful purposes and in a manner
            consistent with the nature and purpose of TestGorilla. You must not
            use the Service to assess candidates for any jobs which are
            unlawful, unsafe, offensive, discriminatory, or inappropriate.
            <br />
            <br />
            You must not use the Service to solicit information from candidates
            that could be used to discriminate against them. Unauthorized use of
            the Service may be a criminal offense and/or give rise to a claim
            for damages.
          </p>
        </div>
      </div>

      {/* this is a 8th row--------------------------------------------------------------------------------- */}

      <div className="row justify-content-center">
        <div className="col-4"></div>
        <div className="col-md-6 col-9 mt-3">
          <div className="d-flex">
            <h4 className="Terms-head number-bg">7. </h4>
            <h4 className="Terms-head ml-2"> Accounts</h4>
          </div>
          <br />

          <p>
            When you create an account with us, you must provide us with
            information that is accurate, complete, and current at all times.
            Failure to do so constitutes a breach of the Terms, which may result
            in termination of your account on our Service.
            <br />
            <br />
            You are responsible for safeguarding the password that you use to
            access the Service and for any activities or actions under your
            password, whether your password is with our Service or a third-party
            service.
            <br />
            <br />
            You agree not to disclose your password to any third party. You must
            notify us immediately upon becoming aware of any breach of security
            or unauthorized use of your account.
            <br />
            <br />
            You may not use as a username the name of another person or entity
            or that is not lawfully available for use, a name or trademark that
            is subject to any rights of another person or entity other than you
            without appropriate authorization, or a name that is otherwise
            offensive, vulgar or obscene.
          </p>
        </div>
      </div>

      {/* this is a 9th row--------------------------------------------------------------------------------- */}

      <div className="row justify-content-center">
        <div className="col-4"></div>
        <div className="col-md-6 col-9 mt-3">
          <div className="d-flex">
            <h4 className="Terms-head number-bg">8. </h4>
            <h4 className="Terms-head ml-2">
              {" "}
              Intellectual Property on the Service
            </h4>
          </div>
          <br />

          <p>
            The Service and its original content (excluding Content provided by
            users), features, and functionality are and shall remain the
            exclusive property of TestGorilla and its licensors. The Service is
            protected by copyright, trademark, and other laws of both the
            Netherlands and foreign countries. Our trademarks and trade dress
            may not be used in connection with any product or service without
            the prior written consent of TestGorilla. You agree that TestGorilla
            shall hold the exclusive property rights to the (aggregated and
            anonymized) test scores and may use these for performing and
            improving its Services (e.g. benchmarking of scores).
          </p>
        </div>
      </div>

      {/* this is a 10th row--------------------------------------------------------------------------------- */}

      <div className="row justify-content-center">
        <div className="col-4"></div>
        <div className="col-md-6 col-9 mt-3">
          <div className="d-flex">
            <h4 className="Terms-head number-bg">9. </h4>
            <h4 className="Terms-head ml-2"> Links To Other Websites</h4>
          </div>
          <br />

          <p>
            Our Service may contain links to third-party websites or services
            that are not owned or controlled by TestGorilla.
            <br />
            <br />
            TestGorilla has no control over, and assumes no responsibility for,
            the content, privacy policies, or practices of any third-party
            websites or services. You further acknowledge and agree that
            TestGorilla shall not be responsible or liable, directly or
            indirectly, for any damage or loss caused or alleged to be caused by
            or in connection with use of or reliance on any such content, goods,
            or services available on or through any such websites or services.
            <br />
            <br />
            We strongly advise you to read the terms of use and privacy policies
            of any third-party websites or services that you visit.
          </p>
        </div>
      </div>

      {/* this is a 11th row--------------------------------------------------------------------------------- */}

      <div className="row justify-content-center">
        <div className="col-4"></div>
        <div className="col-md-6 col-9 mt-3">
          <div className="d-flex">
            <h4 className="Terms-head number-bg">10. </h4>
            <h4 className="Terms-head ml-2"> Data Protection</h4>
          </div>
          <br />

          <p>
            You acknowledge that information about you and the Content posted
            will be collected, held, and used by us in accordance with our
            Privacy Policy.
          </p>
        </div>
      </div>

      {/* this is a 12th row--------------------------------------------------------------------------------- */}

      <div className="row justify-content-center">
        <div className="col-4"></div>
        <div className="col-md-6 col-9 mt-3">
          <div className="d-flex">
            <h4 className="Terms-head number-bg">11. </h4>
            <h4 className="Terms-head ml-2"> Termination</h4>
          </div>
          <br />

          <p>
            We may terminate or suspend your account, without prior notice or
            liability, for any reason, including without limitation if you
            breach the Terms.
            <br />
            <br />
            Upon termination, your right to use the Service shall immediately
            cease. If you wish to terminate your account, you may simply
            discontinue using the Service.
          </p>
        </div>
      </div>

      {/* this is a 13th row--------------------------------------------------------------------------------- */}

      <div className="row justify-content-center">
        <div className="col-4"></div>
        <div className="col-md-6 col-9 mt-3">
          <div className="d-flex">
            <h4 className="Terms-head number-bg">12. </h4>
            <h4 className="Terms-head ml-2">Limitation Of Liability</h4>
          </div>
          <br />

          <p>
            In no event shall TestGorilla, nor its directors, employees,
            partners, agents, suppliers, or affiliates, be liable for any
            indirect, incidental, special, consequential, or punitive damages,
            including without limitation, loss of profits, data, use, goodwill,
            or other intangible losses, resulting from (i) your access to or use
            of or inability to access or use the Service; (ii) any conduct or
            content of any third party on the Service; (iii) any content
            obtained from the Service; and (iv) unauthorized access, use or
            alteration of your transmissions or content, whether based on
            warranty, contract, tort (including negligence) or any other legal
            theory, whether or not we have been informed of the possibility of
            such damage, and even if a remedy set forth herein is found to have
            failed of its essential purpose. Such limitations shall not apply if
            the damages are the result of a deliberate act or gross negligence
            on the part of TestGorilla or its senior management. In any case
            shall TestGorilla’s aggregate liability under these Terms be limited
            to the fees actually paid by you to TestGorilla in the last Billing
            Cycle.
          </p>
        </div>
      </div>

      {/* this is a 14th row--------------------------------------------------------------------------------- */}

      <div className="row justify-content-center">
        <div className="col-4"></div>
        <div className="col-md-6 col-9 mt-3">
          <div className="d-flex">
            <h4 className="Terms-head number-bg">13. </h4>
            <h4 className="Terms-head ml-2">Disclaimer</h4>
          </div>
          <br />

          <p>
            Your use of the Service is at your sole risk. The Service is
            provided on an “AS IS” and “AS AVAILABLE” basis. The Service is
            provided without warranties of any kind, whether express or implied,
            including, but not limited to, implied warranties of
            merchantability, fitness for a particular purpose, non-infringement,
            or course of performance.
            <br />
            <br />
            TestGorilla its subsidiaries, affiliates, and its licensors do not
            warrant that a) the Service will function uninterrupted, secure or
            available at any particular time or location; b) any errors or
            defects will be corrected; c) the Service is free of viruses or
            other harmful components; or d) the results of using the Service
            will meet your requirements.
          </p>
        </div>
      </div>

      {/* this is a 15th row--------------------------------------------------------------------------------- */}

      <div className="row justify-content-center">
        <div className="col-4"></div>
        <div className="col-md-6 col-9 mt-3">
          <div className="d-flex">
            <h4 className="Terms-head number-bg">14. </h4>
            <h4 className="Terms-head ml-2">Governing Law</h4>
          </div>
          <br />

          <p>
            These Terms shall be governed and construed in accordance with the
            laws of the Netherlands, without regard to its conflict of law
            provisions.
            <br />
            <br />
            All disputes between TestGorilla and you (whether or not such
            dispute involves a third party) shall be submitted exclusively to
            the competent court of law in Amsterdam, the Netherlands
            <br />
            <br />
            Our failure to enforce any right or provision of these Terms shall
            not be considered a waiver of those rights. If any provision of
            these Terms is held to be invalid or unenforceable by a court, the
            remaining provisions of these Terms shall remain in effect. These
            Terms constitute the entire agreement between us regarding our
            Service, and supersede and replace any prior agreements we might
            have between us regarding the Service.
          </p>
        </div>
      </div>

      {/* this is a 16th row--------------------------------------------------------------------------------- */}

      <div className="row justify-content-center">
        <div className="col-4"></div>
        <div className="col-md-6 col-9 mt-3">
          <div className="d-flex">
            <h4 className="Terms-head number-bg">15. </h4>
            <h4 className="Terms-head ml-2">Changes</h4>
          </div>
          <br />

          <p>
            We reserve the right, at our sole discretion, to modify or replace
            these Terms at any time. If a revision is material, we will try to
            provide at least 30 days’ notice prior to any new terms taking
            effect. What constitutes a material change shall be determined at
            our sole discretion.
            <br />
            <br />
            By continuing to access or use our Service after those revisions
            become effective, you agree to be bound by the revised terms. If you
            do not agree to the new terms, please stop using the Service.
          </p>
        </div>
      </div>

      {/* this is a 17th row--------------------------------------------------------------------------------- */}

      <div className="row justify-content-center">
        <div className="col-4"></div>
        <div className="col-md-6 col-9 mt-3">
          <div className="d-flex">
            <h4 className="Terms-head number-bg">16. </h4>
            <h4 className="Terms-head ml-2">Partial invalidity</h4>
          </div>
          <br />

          <p>
            If, at any time, any provision of the Terms is or becomes illegal,
            invalid, or unenforceable in any respect under any law of any
            jurisdiction, neither the legality, validity, or enforceability of
            the remaining provisions nor the legality, validity, or
            enforceability of such provision under the law of any other
            jurisdiction shall in any way be affected or impaired.
          </p>
        </div>
      </div>

      {/* this is a 18th row--------------------------------------------------------------------------------- */}

      <div className="row pb-5 justify-content-center">
        <div className="col-4"></div>
        <div className="col-md-6 col-9 mt-3">
          <div className="d-flex">
            <h4 className="Terms-head number-bg">17. </h4>
            <h4 className="Terms-head ml-2">Contact Us</h4>
          </div>
          <br />

          <p>If you have any questions about these Terms, please contact us.</p>
        </div>
      </div>
    </div>
  );
};

export default Salaries;
