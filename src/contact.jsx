import '../src/contact.css'
export default function Contact() {
     return (
     <>
     <br /> <br /> <br />
     <p>Contact Me</p>
     <form id="ffp">
		
			
				<label htmlFor="myFName"> *First Name: </label>
				<input type="text" id="myFName" name="myFName" required="required" autoFocus /> <br /> <br />
				
				<label htmlFor="myLName"> *Last Name: </label>
				<input type="text" id="myLName" name="myLName" required="required" /> <br /> <br />
				
				
				<label htmlFor="myEmail"> *Email: </label>
				<input type="email" id="myEmail" name="myEmail" required="required" /> <br /> <br />
				
				<input type="submit" className="submit" value="Submit" /> <br />
					
		
		</form> <br></br>
          <p><i>Call me on: <strong>437.991.5855 </strong></i></p>
 <p>Aleksandr Pimenov</p>
 <p>apimeno1@my.centennialcollege.ca</p>
     </>
     );
     }
    