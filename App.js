

import React, { useState } from 'react';
import './App.css';
import axios from 'axios';

const App = () => {
  const [formData, setFormData] = useState({
    publicationId: '',
    publicationTitle: '',
    publicationType: 'Select',
    conferenceOrJournal: 'Select',
    conferenceName: '',
    journalName: '',
    volumeNumber: '',
    pageNumber: '',
    issueNumber: '',
    levelOfCirculation: 'Select',
    dateOfPublication: '',
    indexedIn: '',
    indexProof: '',
    ISSNnumber: '',
    impactFactor: '',
    Scoups: 'Select',
    webOfScience: 'Select',
    SCI: 'Select',
    UCGRated: 'Select',
    ugcProof: '',
    hIndex: '',
    citationCnt: '',
    affiliatingInstitute: '',
    publisherName: '',
    paperLink: '',
    journalLink: '',
    proof: '',
    orcidId: '',
    vidwanId: '',
    technology: '',
    domain: '',
    branch: '',
    Industry: 'Select',
    ForeignAuthor: 'Select',
    PublicationStatus: 'Select',
    StudentPresence: 'Select',
    BestPaperAwarded: 'Select',
    Q1Q2Q3Q4: 'Select',
    facultyName: '',
    facultyId: '',
    designation: '',
    dept: '',
    authorId1: '',
    authorId2: '',
    authorId3: '',
    authorId4: '',
    authorId5: '',
    authorId6: '',
    authorId7: '',
    forIndexing: '',
    ugcCiting: '',
    proofDoc: ''
  });

 // Helper function to validate if a field is alphanumeric (allowing spaces)
 const isAlphanumeric = (value) => /^[a-zA-Z\s]+$/.test(value);

 // Helper function to validate if a field contains only numbers
 const isNumeric = (value) => /^\d+$/.test(value);

 const handleChange = (e) => {
   const { name, value } = e.target;

   // Validation for text fields
   const textFieldValidation = (fieldName, fieldValue) => {
     if (fieldValue.trim() === '') {
       alert(`${fieldName} is required`);
       return false;
     }
     if (!isAlphanumeric(fieldValue)) {
       alert(`${fieldName} can only contain alphanumeric characters and spaces`);
       return false;
     }
     return true;
   };

   // Validation for select fields
   const selectFieldValidation = (fieldName, fieldValue) => {
     if (fieldValue === 'Select') {
       alert(`Please select a valid option for ${fieldName}`);
       return false;
     }
     return true;
   };

   // Validation for numeric fields
   const numericFieldValidation = (fieldName, fieldValue) => {
     if (!isNumeric(fieldValue)) {
       alert(`Please enter a valid number for ${fieldName}`);
       return false;
     }
     return true;
   };

   switch (name) {
     case 'publicationId':
     case 'volumeNumber':
     case 'pageNumber':
     case 'issueNumber':
     case 'ISSNnumber':
     case 'impactFactor':
     case 'hIndex':
     case 'citationCnt':
     case 'facultyId':
     case 'orcidId':
     case 'vidwanId':
     case 'authorId1':
     case 'authorId2':
     case 'authorId3':
     case 'authorId4':
     case 'authorId5':
     case 'authorId6':
     case 'authorId7':
       if (!numericFieldValidation(name, value)) return;
       break;
     case 'publicationTitle':
     case 'conferenceName':
     case 'journalName':
     case 'affiliatingInstitute':
     case 'publisherName':
     case 'paperLink':
     case 'journalLink':
     case 'technology':
     case 'domain':
     case 'branch':
     case 'facultyName':
     case 'designation':
     case 'dept':
       if (!textFieldValidation(name, value)) return;
       break;
     case 'publicationType':
     case 'conferenceOrJournal':
     case 'levelOfCirculation':
     case 'Scoups':
     case 'webOfScience':
     case 'SCI':
     case 'UCGRated':
     case 'Industry':
     case 'ForeignAuthor':
     case 'PublicationStatus':
     case 'StudentPresence':
     case 'BestPaperAwarded':
     case 'Q1Q2Q3Q4':
     case 'forIndexing':
     case 'ugcCiting':
       if (!selectFieldValidation(name, value)) return;
       break;
     default:
       break;
   }



    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const scriptUrl = 'http://localhost:5000/publicationform';
    const data = new FormData();
    Object.keys(formData).forEach((key) => {
      data.append(key, formData[key]);
    });

    fetch(scriptUrl, {
      method: 'POST',
      body: data,
    })
      .then((response) => response.text())
      .then((data) => {
        console.log('Success:', data);
        alert('Form submitted successfully!');
        // Optionally, reset the form data state here
        setFormData({
          publicationId: '',
          publicationTitle: '',
          publicationType: 'Select',
          conferenceOrJournal: 'Select',
          conferenceName: '',
          journalName: '',
          volumeNumber: '',
          pageNumber: '',
          issueNumber: '',
          levelOfCirculation: 'Select',
          dateOfPublication: '',
          indexedIn: '',
          indexProof: '',
          ISSNnumber: '',
          impactFactor: '',
          Scoups: 'Select',
          webOfScience: 'Select',
          SCI: 'Select',
          UCGRated: 'Select',
          ugcProof: '',
          hIndex: '',
          citationCnt: '',
          affiliatingInstitute: '',
          publisherName: '',
          paperLink: '',
          journalLink: '',
          proof: '',
          orcidId: '',
          vidwanId: '',
          technology: '',
          domain: '',
          branch: '',
          Industry: 'Select',
          ForeignAuthor: 'Select',
          PublicationStatus: 'Select',
          StudentPresence: 'Select',
          BestPaperAwarded: 'Select',
          Q1Q2Q3Q4: 'Select',
          facultyName: '',
          facultyId: '',
          designation: '',
          dept: '',
          authorId1: '',
          authorId2: '',
          authorId3: '',
          authorId4: '',
          authorId5: '',
          authorId6: '',
          authorId7: '',
          forIndexing: '',
          ugcCiting: '',
          proofDoc: ''
        });
      })
      .catch((error) => {
        console.error('Error:', error);
        alert('There was an error submitting the form. Please try again later.');
      });
  };

function changeHandler(){
  axios.post("http://localhost:5000/publicationform");
}

  return (
    <div className="publication-form">
      <header>
      <div style={{ position: 'relative', width: '100%' }}>
        <img
          src="https://media.licdn.com/dms/image/C560BAQFKt8O5GdaFjw/company-logo_200_200/0/1680080095222/vnr_vignanajyothiinstituteofengineeringandtechnology_logo?e=2147483647&v=beta&t=TbOLxNjzU1LYPUoXNYPFMXd3-pUKhPwWyyyFfOBZn08"
          alt="Your Logo"
          style={{ width: '100px', height: 'auto', float: 'left', margin: '10px 15px 10px 0',color: 'maroon' }}
        />
        {/* Your publication content goes here */}
      </div>
      <form
        method="post"
        action="https://script.google.com/macros/s/AKfycbwJ4GNHpdD-rnHoimGAYTT5BnOd7dhDYoVKYssDChA_uMb8ubAgg-4qC1KbnxhtBgYywQ/exec"
        name="Publication-form"
      >
        <h1>Publication Form</h1>
        <div className="logo">
          <b>VNRVJIET</b>
        </div>
        {/* Additional form elements can be added here */}
      </form>
    </header>

      <form onSubmit={handleSubmit}>
        <section className="publication-info">
          <h2>Publication Information</h2>
          <div className="form-group">
            <label htmlFor="publicationId">Publication ID<span className="required">*</span>:</label>
            <input type="text" id="publicationId" name="publicationId" value={formData.publicationId} required onChange={handleChange} />
          </div>
          <div className="form-group">
            <label htmlFor="publicationTitle">Publication Title<span className="required">*</span>:</label>
            <input type="text" id="publicationTitle" name="publicationTitle" value={formData.publicationTitle} required onChange={handleChange} />
          </div>
          <div className="form-group">
            <label htmlFor="publicationType">Publication Type<span className="required">*</span>:</label>
            <select id="publicationType" name="publicationType" value={formData.publicationType} required onChange={handleChange}>
              <option value="Select">Select</option>
              <option value="Journal">Journal</option>
              <option value="Article">Article</option>
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="conferenceOrJournal">Conference/Journal<span className="required">*</span>:</label>
            <select id="conferenceOrJournal" name="conferenceOrJournal" value={formData.conferenceOrJournal} required onChange={handleChange}>
              <option value="Select">Select</option>
              <option value="Conference">Conference</option>
              <option value="Journal">Journal</option>
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="conferenceName">Conference Name:</label>
            <input type="text" id="conferenceName" name="conferenceName" value={formData.conferenceName} onChange={handleChange} />
          </div>
          <div className="form-group">
            <label htmlFor="journalName">Journal Name:</label>
            <input type="text" id="journalName" name="journalName" value={formData.journalName} onChange={handleChange} />
          </div>
          <div className="form-group">
            <label htmlFor="volumeNumber">Volume Number:</label>
            <input type="text" id="volumeNumber" name="volumeNumber" value={formData.volumeNumber} onChange={handleChange} />
          </div>
          <div className="form-group">
            <label htmlFor="pageNumber">Page Number:</label>
            <input type="text" id="pageNumber" name="pageNumber" value={formData.pageNumber} onChange={handleChange} />
          </div>
          <div className="form-group">
            <label htmlFor="issueNumber">Issue Number:</label>
            <input type="text" id="issueNumber" name="issueNumber" value={formData.issueNumber} onChange={handleChange} />
          </div>
          <div className="form-group">
            <label htmlFor="levelOfCirculation">Level Of Circulation:</label>
            <select id="levelOfCirculation" name="levelOfCirculation" value={formData.levelOfCirculation} onChange={handleChange}>
              <option value="Select">Select</option>
              <option value="National">National</option>
              <option value="International">International</option>
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="dateOfPublication">Date Of Publication:</label>
            <input type="date" id="dateOfPublication" name="dateOfPublication" value={formData.dateOfPublication} onChange={handleChange} />
          </div>
          <div className="form-group">
            <label htmlFor="indexedIn">Indexed In:</label>
            <input type="text" id="indexedIn" name="indexedIn" value={formData.indexedIn} onChange={handleChange} />
          </div>
          <div className="form-group">
            <label htmlFor="indexProof">Index Proof:</label>
            <input type="file" id="indexProof" name="indexProof" onChange={handleChange} />
          </div>
          <div className="form-group">
            <label htmlFor="ISSNnumber">ISSN Number:</label>
            <input type="text" id="ISSNnumber" name="ISSNnumber" value={formData.ISSNnumber} onChange={handleChange} />
          </div>
          <div className="form-group">
            <label htmlFor="impactFactor">Impact Factor:</label>
            <input type="text" id="impactFactor" name="impactFactor" value={formData.impactFactor} onChange={handleChange} />
          </div>
          <div className="form-group">
            <label htmlFor="Scoups">Scoups:</label>
            <select id="Scoups" name="Scoups" value={formData.Scoups} onChange={handleChange}>
              <option value="Select">Select</option>
              <option value="Yes">Yes</option>
              <option value="No">No</option>
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="webOfScience">Web of Science:</label>
            <select id="webOfScience" name="webOfScience" value={formData.webOfScience} onChange={handleChange}>
              <option value="Select">Select</option>
              <option value="Yes">Yes</option>
              <option value="No">No</option>
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="SCI">SCI:</label>
            <select id="SCI" name="SCI" value={formData.SCI} onChange={handleChange}>
              <option value="Select">Select</option>
              <option value="Yes">Yes</option>
              <option value="No">No</option>
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="UCGRated">UGC Rated:</label>
            <select id="UCGRated" name="UCGRated" value={formData.UCGRated} onChange={handleChange}>
              <option value="Select">Select</option>
              <option value="Yes">Yes</option>
              <option value="No">No</option>
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="ugcProof">UGC Proof:</label>
            <input type="file" id="ugcProof" name="ugcProof" onChange={handleChange} />
          </div>
          <div className="form-group">
            <label htmlFor="hIndex">h-Index:</label>
            <input type="text" id="hIndex" name="hIndex" value={formData.hIndex} onChange={handleChange} />
          </div>
          <div className="form-group">
            <label htmlFor="citationCnt">Citation Count:</label>
            <input type="text" id="citationCnt" name="citationCnt" value={formData.citationCnt} onChange={handleChange} />
          </div>
          <div className="form-group">
            <label htmlFor="affiliatingInstitute">Affiliating Institute:</label>
            <input type="text" id="affiliatingInstitute" name="affiliatingInstitute" value={formData.affiliatingInstitute} onChange={handleChange} />
          </div>
          <div className="form-group">
            <label htmlFor="publisherName">Publisher Name:</label>
            <input type="text" id="publisherName" name="publisherName" value={formData.publisherName} onChange={handleChange} />
          </div>
          <div className="form-group">
            <label htmlFor="paperLink">Paper Link:</label>
            <input type="text" id="paperLink" name="paperLink" value={formData.paperLink} onChange={handleChange} />
          </div>
          <div className="form-group">
            <label htmlFor="journalLink">Journal Link:</label>
            <input type="text" id="journalLink" name="journalLink" value={formData.journalLink} onChange={handleChange} />
          </div>
          <div className="form-group">
            <label htmlFor="proof">Proof:</label>
            <input type="file" id="proof" name="proof" onChange={handleChange} />
          </div>
          <div className="form-group">
            <label htmlFor="orcidId">ORCID ID:</label>
            <input type="text" id="orcidId" name="orcidId" value={formData.orcidId} onChange={handleChange} />
          </div>
          <div className="form-group">
            <label htmlFor="vidwanId">Vidwan ID:</label>
            <input type="text" id="vidwanId" name="vidwanId" value={formData.vidwanId} onChange={handleChange} />
          </div>
          <div className="form-group">
            <label htmlFor="technology">Technology:</label>
            <input type="text" id="technology" name="technology" value={formData.technology} onChange={handleChange} />
          </div>
          <div className="form-group">
            <label htmlFor="domain">Domain:</label>
            <input type="text" id="domain" name="domain" value={formData.domain} onChange={handleChange} />
          </div>
          <div className="form-group">
            <label htmlFor="branch">Branch:</label>
            <input type="text" id="branch" name="branch" value={formData.branch} onChange={handleChange} />
          </div>
          <div className="form-group">
            <label htmlFor="Industry">Industry:</label>
            <select id="Industry" name="Industry" value={formData.Industry} onChange={handleChange}>
              <option value="Select">Select</option>
              <option value="Yes">Yes</option>
              <option value="No">No</option>
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="ForeignAuthor">Foreign Author:</label>
            <select id="ForeignAuthor" name="ForeignAuthor" value={formData.ForeignAuthor} onChange={handleChange}>
              <option value="Select">Select</option>
              <option value="Yes">Yes</option>
              <option value="No">No</option>
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="PublicationStatus">Publication Status:</label>
            <select id="PublicationStatus" name="PublicationStatus" value={formData.PublicationStatus} onChange={handleChange}>
              <option value="Select">Select</option>
              <option value="Published">Published</option>
              <option value="In Press">In Press</option>
              <option value="Accepted">Accepted</option>
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="StudentPresence">Student Presence:</label>
            <select id="StudentPresence" name="StudentPresence" value={formData.StudentPresence} onChange={handleChange}>
              <option value="Select">Select</option>
              <option value="Yes">Yes</option>
              <option value="No">No</option>
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="BestPaperAwarded">Best Paper Awarded:</label>
            <select id="BestPaperAwarded" name="BestPaperAwarded" value={formData.BestPaperAwarded} onChange={handleChange}>
              <option value="Select">Select</option>
              <option value="Yes">Yes</option>
              <option value="No">No</option>
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="Q1Q2Q3Q4">Q1/Q2/Q3/Q4:</label>
            <select id="Q1Q2Q3Q4" name="Q1Q2Q3Q4" value={formData.Q1Q2Q3Q4} onChange={handleChange}>
              <option value="Select">Select</option>
              <option value="Q1">Q1</option>
              <option value="Q2">Q2</option>
              <option value="Q3">Q3</option>
              <option value="Q4">Q4</option>
            </select>
          </div>


          <section className="author-info">
          <h2>Author Information</h2>
          <div className="form-group">
            <label htmlFor="facultyName">Faculty Name:</label>
            <input type="text" id="facultyName" name="facultyName" value={formData.facultyName} onChange={handleChange} />
          </div>
          <div className="form-group">
            <label htmlFor="facultyId">Faculty ID:</label>
            <input type="text" id="facultyId" name="facultyId" value={formData.facultyId} onChange={handleChange} />
          </div>
          <div className="form-group">
            <label htmlFor="designation">Designation:</label>
            <input type="text" id="designation" name="designation" value={formData.designation} onChange={handleChange} />
          </div>
          <div className="form-group">
            <label htmlFor="dept">Department:</label>
            <input type="text" id="dept" name="dept" value={formData.dept} onChange={handleChange} />
          </div>
          <div className="form-group">
            <label htmlFor="authorId1">Author ID 1:</label>
            <input type="text" id="authorId1" name="authorId1" value={formData.authorId1} onChange={handleChange} />
          </div>
          <div className="form-group">
            <label htmlFor="authorId2">Author ID 2:</label>
            <input type="text" id="authorId2" name="authorId2" value={formData.authorId2} onChange={handleChange} />
          </div>
          <div className="form-group">
            <label htmlFor="authorId3">Author ID 3:</label>
            <input type="text" id="authorId3" name="authorId3" value={formData.authorId3} onChange={handleChange} />
          </div>
          <div className="form-group">
            <label htmlFor="authorId4">Author ID 4:</label>
            <input type="text" id="authorId4" name="authorId4" value={formData.authorId4} onChange={handleChange} />
          </div>
          <div className="form-group">
            <label htmlFor="authorId5">Author ID 5:</label>
            <input type="text" id="authorId5" name="authorId5" value={formData.authorId5} onChange={handleChange} />
          </div>
          <div className="form-group">
            <label htmlFor="authorId6">Author ID 6:</label>
            <input type="text" id="authorId6" name="authorId6" value={formData.authorId6} onChange={handleChange} />
          </div>
          <div className="form-group">
            <label htmlFor="authorId7">Author ID 7:</label>
            <input type="text" id="authorId7" name="authorId7" value={formData.authorId7} onChange={handleChange} />
          </div>
          </section>
          <section className="supporting-docs">
          <h2>Supporting Documents</h2>
          <div className="form-group">
            <label htmlFor="For Indexing">For Indexing:</label>
            <input type="file" id="For Indexing" name="For Indexing" onChange={handleChange} />
          </div>
          <div className="form-group">
            <label htmlFor="UCG-citing">UCG-citing:</label>
            <input type="file" id="UCG-citing" name="UCG-citing" onChange={handleChange} />
          </div>

          <div className="form-group">
            <label htmlFor="proofDoc">Proof Doc:</label>
            <input type="file" id="proofDoc" name="proofDoc" onChange={handleChange} />
          </div>
          </section>
        </section>
        <input type="submit" value="Submit" id="submit-btn" onChange={handleSubmit} >
        </input>
      </form>
    </div>
  );
};

export default App;