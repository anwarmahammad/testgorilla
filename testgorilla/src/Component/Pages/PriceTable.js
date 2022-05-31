import React from "react";

const PriceTable = () => {
  return (
    <div>
      <div className="container p-4">
        <div className="row pricing_card mt-5  mb-3">
          <table class="table  table-hover table-responsive">
            <thead>
              <tr>
                <th className="rowspan-1 table_width"></th>
                <th
                  scope="col"
                  className="rowspan-1 w-15 pricing_para_table text-center"
                >
                  FREE
                </th>
                <th
                  scope="col"
                  className="rowspan-1 w-15 pricing_para_table text-center"
                >
                  PAY AS YOU GO
                </th>
                <th
                  scope="col"
                  className="rowspan-1 w-15 pricing_para_table text-center"
                >
                  SCALE
                </th>
                <th
                  scope="col"
                  className="rowspan-1 w-15 pricing_para_table text-center"
                >
                  BUSINESS
                </th>
              </tr>
            </thead>
            <tbody className="pricing_para_table">
              <tr>
                <th className="pricing_para_table">Test library</th>
                <th className="pricing_para_table text-center">10</th>
                <th className="pricing_para_table text-center">213</th>
                <th className="pricing_para_table text-center">213</th>
                <th className="pricing_para_table text-center">213</th>
              </tr>
              <tr>
                <td>Cognitive ability tests</td>
                <td className="text-center">1</td>
                <td className="text-center">
                  <i class="fa fa-check  price_icon_table "></i>
                </td>
                <td className="text-center">
                  <i class="fa fa-check  price_icon_table "></i>
                </td>
                <td className="text-center">
                  <i class="fa fa-check  price_icon_table "></i>
                </td>
              </tr>
              <tr>
                <td>Situational judgment tests</td>
                <td className="text-center">1</td>
                <td className="text-center">
                  <i class="fa fa-check  price_icon_table "></i>
                </td>
                <td className="text-center">
                  <i class="fa fa-check  price_icon_table "></i>
                </td>
                <td className="text-center">
                  <i class="fa fa-check  price_icon_table "></i>
                </td>
              </tr>
              <tr>
                <td>Job-specific tests</td>
                <td className="text-center">2</td>
                <td className="text-center">
                  <i class="fa fa-check  price_icon_table "></i>
                </td>
                <td className="text-center">
                  <i class="fa fa-check  price_icon_table "></i>
                </td>
                <td className="text-center">
                  <i class="fa fa-check  price_icon_table "></i>
                </td>
              </tr>
              <tr>
                <td>Software tests</td>
                <td className="text-center">2</td>
                <td className="text-center">
                  <i class="far fa-times-circle price_icon_table"></i>
                </td>
                <td className="text-center">
                  <i class="fa fa-check  price_icon_table "></i>
                </td>
                <td className="text-center">
                  <i class="fa fa-check  price_icon_table "></i>
                </td>
              </tr>
              <tr>
                <td>Programming tests (incl. coding challenges)</td>
                <td className="text-center">1</td>
                <td className="text-center">
                  <i class="fa fa-check  price_icon_table "></i>
                </td>
                <td className="text-center">
                  <i class="fa fa-check  price_icon_table "></i>
                </td>
                <td className="text-center">
                  <i class="fa fa-check  price_icon_table "></i>
                </td>
              </tr>
              <tr>
                <td>Language tests</td>
                <td className="text-center">1</td>
                <td className="text-center">
                  <i class="fa fa-check  price_icon_table "></i>
                </td>
                <td className="text-center">
                  <i class="fa fa-check  price_icon_table "></i>
                </td>
                <td className="text-center">
                  <i class="fa fa-check  price_icon_table "></i>
                </td>
              </tr>
              <tr>
                <td>Personality tests</td>
                <td className="text-center">4</td>
                <td className="text-center">
                  <i class="fa fa-check  price_icon_table "></i>
                </td>
                <td className="text-center">
                  <i class="fa fa-check  price_icon_table "></i>
                </td>
                <td className="text-center">
                  <i class="fa fa-check  price_icon_table "></i>
                </td>
              </tr>
              <tr>
                <td>Culture add test</td>
                <td className="text-center">
                  <i class="far fa-times-circle price_icon_table"></i>
                </td>
                <td className="text-center">
                  <i class="fa fa-check  price_icon_table "></i>
                </td>
                <td className="text-center">
                  <i class="fa fa-check  price_icon_table "></i>
                </td>
                <td className="text-center">
                  <i class="fa fa-check  price_icon_table "></i>
                </td>
              </tr>
              <tr>
                <td>Your own custom tests</td>
                <td className="text-center">
                  <i class="far fa-times-circle price_icon_table"></i>
                </td>
                <td className="text-center">
                  <i class="far fa-times-circle price_icon_table"></i>
                </td>
                <td className="text-center">
                  <i class="fa fa-check  price_icon_table "></i>
                </td>
                <td className="text-center">
                  <i class="fa fa-check  price_icon_table "></i>
                </td>
              </tr>
              <tr>
                <td>Custom questions per assessment</td>
                <td className="text-center">1</td>
                <td className="text-center">5</td>
                <td className="text-center">10</td>
                <td className="text-center">20</td>
              </tr>
              <tr>
                <td>Test recommendations for each job role</td>
                <td className="text-center">
                  <i class="fa fa-check  price_icon_table "></i>
                </td>
                <td className="text-center">
                  <i class="fa fa-check  price_icon_table "></i>
                </td>
                <td className="text-center">
                  <i class="fa fa-check  price_icon_table "></i>
                </td>
                <td className="text-center">
                  <i class="fa fa-check  price_icon_table "></i>
                </td>
              </tr>
              <tr>
                <td>Tests per assessment</td>
                <td className="text-center">5</td>
                <td className="text-center">5</td>
                <td className="text-center">5</td>
                <td className="text-center">5</td>
              </tr>
              <tr>
                <th className="rowspan-2 w-40 pricing_para_table">
                  Functionality to hire developers
                </th>
                <th></th>
                <th></th>
                <th></th>
                <th></th>
              </tr>
              <tr>
                <td class="align-middle">Coding languages</td>
                <td className="text-center">JavaScript</td>
                <td className="text-center">
                  JavaScript, Java, Python, PHP, C, C#, C++, SQL, Ruby,
                  Typescript, Go, R, Scala and Swift
                </td>
                <td className="text-center">
                  JavaScript, Java, Python, PHP, C, C#, C++, SQL, Kotlin, Ruby,
                  Typescript, Go, R, Scala and Swift
                </td>
                <td className="text-center">
                  JavaScript, Java, Python, PHP, C, C#, C++, SQL, Kotlin, Ruby,
                  Typescript, Go, R, Scala and Swift
                </td>
              </tr>
              <tr>
                <td>Web development frameworks</td>
                <td className="text-center">
                  <i class="far fa-times-circle price_icon_table"></i>
                </td>
                <td className="text-center">
                  <i class="fa fa-check  price_icon_table "></i>
                </td>
                <td className="text-center">
                  <i class="fa fa-check  price_icon_table "></i>
                </td>
                <td className="text-center">
                  <i class="fa fa-check  price_icon_table "></i>
                </td>
              </tr>
              <tr>
                <td>Mobile development frameworks</td>
                <td className="text-center">
                  <i class="far fa-times-circle price_icon_table"></i>
                </td>
                <td className="text-center">
                  <i class="fa fa-check  price_icon_table "></i>
                </td>
                <td className="text-center">
                  <i class="fa fa-check  price_icon_table "></i>
                </td>
                <td className="text-center">
                  <i class="fa fa-check  price_icon_table "></i>
                </td>
              </tr>
              <tr>
                <td>Algorithmic thinking challenges</td>
                <td className="text-center">
                  <i class="far fa-times-circle price_icon_table"></i>
                </td>
                <td className="text-center">
                  <i class="fa fa-check  price_icon_table "></i>
                </td>
                <td className="text-center">
                  <i class="fa fa-check  price_icon_table "></i>
                </td>
                <td className="text-center">
                  <i class="fa fa-check  price_icon_table "></i>
                </td>
              </tr>
              <tr>
                <td>Debugging challenges</td>
                <td className="text-center">
                  <i class="far fa-times-circle price_icon_table"></i>
                </td>
                <td className="text-center">
                  <i class="fa fa-check  price_icon_table "></i>
                </td>
                <td className="text-center">
                  <i class="fa fa-check  price_icon_table "></i>
                </td>
                <td className="text-center">
                  <i class="fa fa-check  price_icon_table "></i>
                </td>
              </tr>
              <tr>
                <td>Language-specific concept challenges</td>
                <td className="text-center">
                  <i class="far fa-times-circle price_icon_table"></i>
                </td>
                <td className="text-center">
                  <i class="fa fa-check  price_icon_table "></i>
                </td>
                <td className="text-center">
                  <i class="fa fa-check  price_icon_table "></i>
                </td>
                <td className="text-center">
                  <i class="fa fa-check  price_icon_table "></i>
                </td>
              </tr>
              <tr>
                <td>Your own custom coding challenges</td>
                <td className="text-center">
                  <i class="far fa-times-circle price_icon_table"></i>
                </td>
                <td className="text-center">
                  <i class="far fa-times-circle price_icon_table"></i>
                </td>
                <td className="text-center">
                  <i class="fa fa-check  price_icon_table "></i>
                </td>
                <td className="text-center">
                  <i class="fa fa-check  price_icon_table "></i>
                </td>
              </tr>
              <tr>
                <td>Code playback function</td>
                <td className="text-center">
                  <i class="fa fa-check  price_icon_table "></i>
                </td>
                <td className="text-center">
                  <i class="fa fa-check  price_icon_table "></i>
                </td>
                <td className="text-center">
                  <i class="fa fa-check  price_icon_table "></i>
                </td>
                <td className="text-center">
                  <i class="fa fa-check  price_icon_table "></i>
                </td>
              </tr>
              <tr>
                <td>Automated scoring</td>
                <td className="text-center">
                  <i class="fa fa-check  price_icon_table "></i>
                </td>
                <td className="text-center">
                  <i class="fa fa-check  price_icon_table "></i>
                </td>
                <td className="text-center">
                  <i class="fa fa-check  price_icon_table "></i>
                </td>
                <td className="text-center">
                  <i class="fa fa-check  price_icon_table "></i>
                </td>
              </tr>
              {/* Video interviews */}
              <tr>
                <th className="rowspan-2 w-40 pricing_para_table">
                  Video interviews
                </th>
                <th></th>
                <th></th>
                <th></th>
                <th></th>
              </tr>
              <tr>
                <td>One-way video interview</td>
                <td className="text-center">
                  <i class="far fa-times-circle price_icon_table"></i>
                </td>
                <td className="text-center">
                  <i class="fa fa-check  price_icon_table "></i>
                </td>
                <td className="text-center">
                  <i class="fa fa-check  price_icon_table "></i>
                </td>
                <td className="text-center">
                  <i class="fa fa-check  price_icon_table "></i>
                </td>
              </tr>
              <tr>
                <td>Custom video questions per assessment</td>
                <td className="text-center">-</td>
                <td className="text-center">5</td>
                <td className="text-center">10</td>
                <td className="text-center">20</td>
              </tr>
              <tr>
                <td>Candidate's recording attempts per question</td>
                <td className="text-center">-</td>
                <td className="text-center">3</td>
                <td className="text-center">3</td>
                <td className="text-center">3</td>
              </tr>
              <tr>
                <td>Restrict maximum answer length</td>
                <td className="text-center">-</td>
                <td className="text-center">
                  3 Options: 30 sec, 60 sec, 2 min
                </td>
                <td className="text-center">
                  3 Options: 30 sec, 60 sec, 2 min
                </td>
                <td className="text-center">
                  3 Options: 30 sec, 60 sec, 2 min
                </td>
              </tr>
              <tr>
                <td>Recording and playback on any device</td>
                <td className="text-center">-</td>
                <td className="text-center">
                  <i class="fa fa-check  price_icon_table "></i>
                </td>
                <td className="text-center">
                  <i class="fa fa-check  price_icon_table "></i>
                </td>
                <td className="text-center">
                  <i class="fa fa-check  price_icon_table "></i>
                </td>
              </tr>
              <tr>
                <td>Rate and comment on video answers</td>
                <td className="text-center">-</td>
                <td className="text-center">
                  <i class="fa fa-check  price_icon_table "></i>
                </td>
                <td className="text-center">
                  <i class="fa fa-check  price_icon_table "></i>
                </td>
                <td className="text-center">
                  <i class="fa fa-check price_icon_table"></i>
                </td>
              </tr>
              <tr>
                <th className="rowspan-2 w-40 pricing_para_table">
                  Candidate experience & company branding
                </th>
                <th></th>
                <th></th>
                <th></th>
                <th></th>
              </tr>
              <tr>
                <td>Your company's intro or outro video</td>
                <td className="text-center">
                  <i class="far fa-times-circle price_icon_table"></i>
                </td>
                <td className="text-center">
                  <i class="far fa-times-circle price_icon_table"></i>
                </td>
                <td className="text-center">
                  <i class="fa fa-check  price_icon_table "></i>
                </td>
                <td className="text-center">
                  <i class="fa fa-check  price_icon_table "></i>
                </td>
              </tr>
              <tr>
                <td>Assessments branded with your company logo and color</td>
                <td className="text-center">
                  <i class="fa fa-check  price_icon_table "></i>
                </td>
                <td className="text-center">
                  <i class="fa fa-check  price_icon_table "></i>
                </td>
                <td className="text-center">
                  <i class="fa fa-check  price_icon_table "></i>
                </td>
                <td className="text-center">
                  <i class="fa fa-check  price_icon_table "></i>
                </td>
              </tr>
              <tr>
                <td>Customizable invitation and rejection emails</td>
                <td className="text-center">
                  <i class="fa fa-check  price_icon_table "></i>
                </td>
                <td className="text-center">
                  <i class="fa fa-check  price_icon_table "></i>
                </td>
                <td className="text-center">
                  <i class="fa fa-check  price_icon_table "></i>
                </td>
                <td className="text-center">
                  <i class="fa fa-check  price_icon_table "></i>
                </td>
              </tr>
              <tr>
                <td>No login required for candidates</td>
                <td className="text-center">
                  <i class="fa fa-check  price_icon_table "></i>
                </td>
                <td className="text-center">
                  <i class="fa fa-check  price_icon_table "></i>
                </td>
                <td className="text-center">
                  <i class="fa fa-check  price_icon_table "></i>
                </td>
                <td className="text-center">
                  <i class="fa fa-check  price_icon_table "></i>
                </td>
              </tr>
              <tr>
                <td>Mobile-friendly</td>
                <td className="text-center">
                  <i class="fa fa-check  price_icon_table "></i>
                </td>
                <td className="text-center">
                  <i class="fa fa-check  price_icon_table "></i>
                </td>
                <td className="text-center">
                  <i class="fa fa-check  price_icon_table "></i>
                </td>
                <td className="text-center">
                  <i class="fa fa-check  price_icon_table "></i>
                </td>
              </tr>
              <tr>
                <td>Help and support for your candidates</td>
                <td className="text-center">
                  <i class="fa fa-check  price_icon_table "></i>
                </td>
                <td className="text-center">
                  <i class="fa fa-check  price_icon_table "></i>
                </td>
                <td className="text-center">
                  <i class="fa fa-check  price_icon_table "></i>
                </td>
                <td className="text-center">
                  <i class="fa fa-check  price_icon_table "></i>
                </td>
              </tr>
              <tr>
                <td>Typical assessment length</td>
                <td className="text-center"></td>
                <td className="text-center" colspan="4">30-60 minutes</td>
                
              </tr>
              <tr>
                <td>Qualifying questions prior to assessment</td>
                <td className="text-center">
                  <i class="far fa-times-circle price_icon_table"></i>
                </td>
                <td className="text-center">
                  <i class="far fa-times-circle price_icon_table"></i>
                </td>
                <td className="text-center">5</td>
                <td className="text-center">5</td>
              </tr>
              <tr>
                <th className="rowspan-2 w-40 pricing_para_table">
                  Enterprise / start-up friendly
                </th>
                <th></th>
                <th></th>
                <th></th>
                <th></th>
              </tr>
              <tr>
                <td>ATS integration</td>
                <td className="text-center">
                  <i class="far fa-times-circle price_icon_table"></i>
                </td>
                <td className="text-center">
                  <i class="far fa-times-circle price_icon_table"></i>
                </td>
                <td className="text-center">
                  <i class="fa fa-check  price_icon_table "></i>
                </td>
                <td className="text-center">
                  <i class="fa fa-check  price_icon_table "></i>
                </td>
              </tr>
              <tr>
                <td>Multiple users and role-based rights management</td>
                <td className="text-center">
                  <i class="fa fa-check  price_icon_table "></i>
                </td>
                <td className="text-center">
                  <i class="fa fa-check  price_icon_table "></i>
                </td>
                <td className="text-center">
                  <i class="fa fa-check  price_icon_table "></i>
                </td>
                <td className="text-center">
                  <i class="fa fa-check  price_icon_table "></i>
                </td>
              </tr>
              <tr>
                <td>GDPR compliant</td>
                <td className="text-center">
                  <i class="fa fa-check  price_icon_table "></i>
                </td>
                <td className="text-center">
                  <i class="fa fa-check  price_icon_table "></i>
                </td>
                <td className="text-center">
                  <i class="fa fa-check  price_icon_table "></i>
                </td>
                <td className="text-center">
                  <i class="fa fa-check  price_icon_table "></i>
                </td>
              </tr>
              <tr>
                <td>Multiple candidate invitation options</td>
                <td className="text-center">
                  <i class="fa fa-check  price_icon_table "></i>
                </td>
                <td className="text-center">
                  <i class="fa fa-check  price_icon_table "></i>
                </td>
                <td className="text-center">
                  <i class="fa fa-check  price_icon_table "></i>
                </td>
                <td className="text-center">
                  <i class="fa fa-check  price_icon_table "></i>
                </td>
              </tr>
              <tr>
                <td>Public link to invite candidates</td>
                <td className="text-center">
                  <i class="fa fa-check  price_icon_table "></i>
                </td>
                <td className="text-center">
                  <i class="fa fa-check  price_icon_table "></i>
                </td>
                <td className="text-center">
                  <i class="fa fa-check  price_icon_table "></i>
                </td>
                <td className="text-center">
                  <i class="fa fa-check  price_icon_table "></i>
                </td>
              </tr>
              <tr>
                <td>Public links for each candidate source</td>
                <td className="text-center">
                  <i class="far fa-times-circle price_icon_table"></i>
                </td>
                <td className="text-center">
                  <i class="far fa-times-circle price_icon_table"></i>
                </td>
                <td className="text-center">
                  <i class="fa fa-check  price_icon_table "></i>
                </td>
                <td className="text-center">
                  <i class="fa fa-check  price_icon_table "></i>
                </td>
              </tr>
              <tr>
                <td>Bulk invite candidates (CSV/XLSX upload)</td>
                <td className="text-center">
                  <i class="far fa-times-circle price_icon_table"></i>
                </td>
                <td className="text-center">
                  <i class="fa fa-check  price_icon_table "></i>
                </td>
                <td className="text-center">
                  <i class="fa fa-check  price_icon_table "></i>
                </td>
                <td className="text-center">
                  <i class="fa fa-check  price_icon_table "></i>
                </td>
              </tr>
              <tr>
                <td>Track candidate stages from invited to hired</td>
                <td className="text-center">
                  <i class="fa fa-check  price_icon_table "></i>
                </td>
                <td className="text-center">
                  <i class="fa fa-check  price_icon_table "></i>
                </td>
                <td className="text-center">
                  <i class="fa fa-check  price_icon_table "></i>
                </td>
                <td className="text-center">
                  <i class="fa fa-check  price_icon_table "></i>
                </td>
              </tr>
              <tr>
                <td>API access</td>
                <td className="text-center">
                  <i class="far fa-times-circle price_icon_table"></i>
                </td>
                <td className="text-center">
                  <i class="far fa-times-circle price_icon_table"></i>
                </td>
                <td className="text-center">
                  <i class="far fa-times-circle price_icon_table"></i>
                </td>
                <td className="text-center">
                  <i class="fa fa-check  price_icon_table "></i>
                </td>
              </tr>
              <tr>
                <th className="rowspan-2 w-40 pricing_para_table">
                  Quality control
                </th>
                <th></th>
                <th></th>
                <th></th>
                <th></th>
              </tr>
              <tr>
                <td>
                  Proprietary algorithms that continuously improve quality of
                  each test
                </td>
                <td className="text-center">
                  <i class="fa fa-check  price_icon_table "></i>
                </td>
                <td className="text-center">
                  <i class="fa fa-check  price_icon_table "></i>
                </td>
                <td className="text-center">
                  <i class="fa fa-check  price_icon_table "></i>
                </td>
                <td className="text-center">
                  <i class="fa fa-check  price_icon_table "></i>
                </td>
              </tr>
              <tr>
                <td>
                  Proprietary algorithms that continuously improve quality of
                  each test
                </td>
                <td className="text-center" colspan="4">
                  28 step process incl. peer reviews, sample testing,
                  copywriters, review by psychometrician, and more
                </td>
              </tr>
              <tr>
                <td>
                  Questions automatically replaced after reaching exposure limit
                </td>
                <td className="text-center" colspan="4">
                  Yes, after 10,000 times
                </td>
              </tr>
              <tr>
                <td>
                Customer feedback used to improve tests
                </td>
                <td className="text-center">
                  <i class="fa fa-check  price_icon_table "></i>
                </td>
                <td className="text-center">
                  <i class="fa fa-check  price_icon_table "></i>
                </td>
                <td className="text-center">
                  <i class="fa fa-check  price_icon_table "></i>
                </td>
                <td className="text-center">
                  <i class="fa fa-check  price_icon_table "></i>
                </td>
              </tr>
              <tr>
                <td>
                Test-taker feedback used to improve tests
                </td>
                <td className="text-center">
                  <i class="fa fa-check  price_icon_table "></i>
                </td>
                <td className="text-center">
                  <i class="fa fa-check  price_icon_table "></i>
                </td>
                <td className="text-center">
                  <i class="fa fa-check  price_icon_table "></i>
                </td>
                <td className="text-center">
                  <i class="fa fa-check  price_icon_table "></i>
                </td>
              </tr>
              <tr>
                <th className="rowspan-2 w-40 pricing_para_table">
                Anti-cheating measures
                </th>
                <th></th>
                <th></th>
                <th></th>
                <th></th>
              </tr>
              <tr>
                <td>
                IP address logging (to avoid multiple attempts by the same candidate)
                </td>
                <td className="text-center">
                  <i class="fa fa-check  price_icon_table "></i>
                </td>
                <td className="text-center">
                  <i class="fa fa-check  price_icon_table "></i>
                </td>
                <td className="text-center">
                  <i class="fa fa-check  price_icon_table "></i>
                </td>
                <td className="text-center">
                  <i class="fa fa-check  price_icon_table "></i>
                </td>
              </tr>
              <tr>
                <td>
                Logging of candidate location
                </td>
                <td className="text-center">
                  <i class="fa fa-check  price_icon_table "></i>
                </td>
                <td className="text-center">
                  <i class="fa fa-check  price_icon_table "></i>
                </td>
                <td className="text-center">
                  <i class="fa fa-check  price_icon_table "></i>
                </td>
                <td className="text-center">
                  <i class="fa fa-check  price_icon_table "></i>
                </td>
              </tr>
              <tr>
                <td>
                Webcam snapshots (with option to turn on/off)
                </td>
                <td className="text-center">
                  <i class="fa fa-check  price_icon_table "></i>
                </td>
                <td className="text-center">
                  <i class="fa fa-check  price_icon_table "></i>
                </td>
                <td className="text-center">
                  <i class="fa fa-check  price_icon_table "></i>
                </td>
                <td className="text-center">
                  <i class="fa fa-check  price_icon_table "></i>
                </td>
              </tr>
              <tr>
                <td>
                Full-screen mode detection (to avoid research during test)
                </td>
                <td className="text-center">
                  <i class="fa fa-check  price_icon_table "></i>
                </td>
                <td className="text-center">
                  <i class="fa fa-check  price_icon_table "></i>
                </td>
                <td className="text-center">
                  <i class="fa fa-check  price_icon_table "></i>
                </td>
                <td className="text-center">
                  <i class="fa fa-check  price_icon_table "></i>
                </td>
              </tr>
              <tr>
                <td>
                Randomized questions per test
                </td>
                <td className="text-center">
                  <i class="fa fa-check  price_icon_table "></i>
                </td>
                <td className="text-center">
                  <i class="fa fa-check  price_icon_table "></i>
                </td>
                <td className="text-center">
                  <i class="fa fa-check  price_icon_table "></i>
                </td>
                <td className="text-center">
                  <i class="fa fa-check  price_icon_table "></i>
                </td>
              </tr>
              <tr>
                <td>
                Large question pool for each test
                </td>
                <td className="text-center" colspan="4">
                Yes, 100+
                </td>
              </tr>
              <tr>
              <td>
              Questions and answers not visible to employers to protect test integrity
                </td>
                <td className="text-center">
                  <i class="fa fa-check  price_icon_table "></i>
                </td>
                <td className="text-center">
                  <i class="fa fa-check  price_icon_table "></i>
                </td>
                <td className="text-center">
                  <i class="fa fa-check  price_icon_table "></i>
                </td>
                <td className="text-center">
                  <i class="fa fa-check  price_icon_table "></i>
                </td>
              </tr>
              <tr>
                <td>
                Time limit on tests
                </td>
                <td className="text-center" colspan="4">
                Yes, typically 10 minutes (making it virtually impossible to look anything up and finish on time)
                </td>
              </tr>
              <tr>
              <td>
              Copy-paste disabled
                </td>
                <td className="text-center">
                  <i class="fa fa-check  price_icon_table "></i>
                </td>
                <td className="text-center">
                  <i class="fa fa-check  price_icon_table "></i>
                </td>
                <td className="text-center">
                  <i class="fa fa-check  price_icon_table "></i>
                </td>
                <td className="text-center">
                  <i class="fa fa-check  price_icon_table "></i>
                </td>
              </tr>
              <tr>
                <th className="rowspan-2 w-40 pricing_para_table">
                Reporting and analytics
                </th>
                <th></th>
                <th></th>
                <th></th>
                <th></th>
              </tr>
              <tr>
              <td>
              PDF reports of assessments and individual candidates	
                </td>
                <td className="text-center">
                <i class="far fa-times-circle price_icon_table"></i>
                </td>
                <td className="text-center">
                <i class="far fa-times-circle price_icon_table"></i>
                </td>
                <td className="text-center">
                  <i class="fa fa-check  price_icon_table "></i>
                </td>
                <td className="text-center">
                  <i class="fa fa-check  price_icon_table "></i>
                </td>
              </tr>
              <tr>
              <td>
              Excel and CSV reports of assessments and individual candidates
                </td>
                <td className="text-center">
                  <i class="fa fa-check  price_icon_table "></i>
                </td>
                <td className="text-center">
                  <i class="fa fa-check  price_icon_table "></i>
                </td>
                <td className="text-center">
                  <i class="fa fa-check  price_icon_table "></i>
                </td>
                <td className="text-center">
                  <i class="fa fa-check  price_icon_table "></i>
                </td>
              </tr>
              <tr>
              <td>
              Comprehensive overview for all current and past candidates
                </td>
                <td className="text-center">
                  <i class="fa fa-check  price_icon_table "></i>
                </td>
                <td className="text-center">
                  <i class="fa fa-check  price_icon_table "></i>
                </td>
                <td className="text-center">
                  <i class="fa fa-check  price_icon_table "></i>
                </td>
                <td className="text-center">
                  <i class="fa fa-check  price_icon_table "></i>
                </td>
              </tr>
              <tr>
              <td>
              Scoring benchmarks for candidates (including percentile rank scoring)
                </td>
                <td className="text-center">
                  <i class="fa fa-check  price_icon_table "></i>
                </td>
                <td className="text-center">
                  <i class="fa fa-check  price_icon_table "></i>
                </td>
                <td className="text-center">
                  <i class="fa fa-check  price_icon_table "></i>
                </td>
                <td className="text-center">
                  <i class="fa fa-check  price_icon_table "></i>
                </td>
              </tr>
              <tr>
              <td>
              Add your ratings and personal notes for candidates
                </td>
                <td className="text-center">
                  <i class="fa fa-check  price_icon_table "></i>
                </td>
                <td className="text-center">
                  <i class="fa fa-check  price_icon_table "></i>
                </td>
                <td className="text-center">
                  <i class="fa fa-check  price_icon_table "></i>
                </td>
                <td className="text-center">
                  <i class="fa fa-check  price_icon_table "></i>
                </td>
              </tr>
              <tr>
                <th className="rowspan-2 w-40 pricing_para_table">
                Customer support
                </th>
                <th></th>
                <th></th>
                <th></th>
                <th></th>
              </tr>
              <tr>
              <td>
              Live chat
                </td>
                <td className="text-center">
                  <i class="fa fa-check  price_icon_table "></i>
                </td>
                <td className="text-center">
                  <i class="fa fa-check  price_icon_table "></i>
                </td>
                <td className="text-center">
                  <i class="fa fa-check  price_icon_table "></i>
                </td>
                <td className="text-center">
                  <i class="fa fa-check  price_icon_table "></i>
                </td>
              </tr>
              <tr>
              <td>
              Help center
                </td>
                <td className="text-center">
                  <i class="fa fa-check  price_icon_table "></i>
                </td>
                <td className="text-center">
                  <i class="fa fa-check  price_icon_table "></i>
                </td>
                <td className="text-center">
                  <i class="fa fa-check  price_icon_table "></i>
                </td>
                <td className="text-center">
                  <i class="fa fa-check  price_icon_table "></i>
                </td>
              </tr>
              <tr>
              <td>
              Email support
                </td>
                <td className="text-center">
                  <i class="fa fa-check  price_icon_table "></i>
                </td>
                <td className="text-center">
                  <i class="fa fa-check  price_icon_table "></i>
                </td>
                <td className="text-center">
                  <i class="fa fa-check  price_icon_table "></i>
                </td>
                <td className="text-center">
                  <i class="fa fa-check  price_icon_table "></i>
                </td>
              </tr>
              <tr>
              <td>
              Training & onboarding tour
                </td>
                <td className="text-center">
                  <i class="fa fa-check  price_icon_table "></i>
                </td>
                <td className="text-center">
                  <i class="fa fa-check  price_icon_table "></i>
                </td>
                <td className="text-center">
                  <i class="fa fa-check  price_icon_table "></i>
                </td>
                <td className="text-center">
                  <i class="fa fa-check  price_icon_table "></i>
                </td>
              </tr>
              <tr>
              <td>
              Phone assistance
                </td>
                <td className="text-center">
                <i class="far fa-times-circle price_icon_table"></i>
                </td>
                <td className="text-center">
                <i class="far fa-times-circle price_icon_table"></i>
                </td>
                <td className="text-center">
                <i class="far fa-times-circle price_icon_table"></i>
                </td>
                <td className="text-center">
                  <i class="fa fa-check  price_icon_table "></i>
                </td>
              </tr>
              <tr></tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default PriceTable;
