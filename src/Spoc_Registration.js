import React from "react";
import { Link } from "react-router-dom";
function Spoc_Registration(props){

    return(  
        <section class="login-box custom">
            <div class="container">
                <div class="row">     
                    <div class="intro clearfix " >
                        <div class="offset-md-2 offset-lg-2 col-lg-8 col-md-8 col-sm-12 col-xs-12">
                            <h1 class="youtube_msg-err-heading">SPOC Regsitration</h1><br/><br/>
                            <div class="registra-main">
                                <div class="row">
                                    <div class="col-lg-4 col-md-4 col-sm-4 col-xs-5 ">
                                        <label class="radio-inline no_icon">School Code: </label>
                                    </div>
                                    <div class="col-lg-7 col-md-7 col-sm-8 col-xs-7">
                                        <input placeholder="Code" type="text" name="Code" class="form-control-login input_box" id="Code" /> 
                                    </div>
                                </div>   
                            </div>   
                            <div class="registra-main">
                                <div class="row">
                                    <div class="col-lg-4 col-md-4 col-sm-4 col-xs-5 ">
                                        <label class="radio-inline no_icon">School Name:  </label>
                                    </div>
                                    <div class="col-lg-7 col-md-7 col-sm-8 col-xs-7">
                                        <input type="text" id="selected_college" placeholder="Enter school name" name="School_Name"  class="form-control-login input_box"/>
                                    </div>    
                                </div> 
                            </div>

                            <div class="registra-main">
                                <div class="row">
                                    <div class="col-lg-4 col-md-4 col-sm-4 col-xs-5 ">
                                        <label class="radio-inline no_icon">City: </label>
                                    </div>
                                    <div class="col-lg-7 col-md-7 col-sm-8 col-xs-7">
                                        <input placeholder="City" type="text" name="City" class="form-control-login input_box" id="City"/> 
                                    </div>
                                </div>
                            </div>
                            <div class="registra-main">
                                <div class="row">
                                    <div class="col-lg-4 col-md-4 col-sm-4 col-xs-5 ">
                                        <label class="radio-inline no_icon"> State: </label>
                                    </div>
                                    <div class="col-lg-7 col-md-7 col-sm-8 col-xs-7">
                                        <input placeholder="State" type="text" name="State" class="form-control-login input_box" id="State"/> 
                                    </div>
                                </div>
                            </div>
                            <div class="registra-main">
                                <div class="row">
                                    <div class="col-lg-4 col-md-4 col-sm-4 col-xs-5 ">
                                        <label class="radio-inline no_icon">Pin Code / Zip Code: </label>
                                    </div>
                                    <div class="col-lg-7 col-md-7 col-sm-8 col-xs-7">
                                        <input placeholder="Pin Code / Zip Code" type="text" name="Pin_Code" class="form-control-login input_box" id="Pin_Code"/> 
                                    </div>
                                </div>
                            </div>

                            <div class="registra-main">
                                <div class="row">
                                    <div class="col-lg-4 col-md-4 col-sm-4 col-xs-5">
                                        <label class="radio-inline no_icon">Principle Name: </label>
                                    </div>
                                    <div class="col-lg-7 col-md-7 col-sm-8 col-xs-7">
                                        <input placeholder="Enter First Name" type="text" name="First_Name" class="form-control-login input_box fname" id="First_Name"/>
                                        <span class="youtube_msg-err">Max 200 CHARACTERS Allowed</span>
                                    </div>
                                </div>
                            </div>
                            <div class="registra-main">
                                <div class="row">
                                    <div class="col-lg-4 col-md-4 col-sm-4 col-xs-5">
                                        <label class="radio-inline no_icon">Principle Mobile No: </label>
                                    </div>
                                    <div class="col-lg-7 col-md-7 col-sm-8 col-xs-7 ">
                                        <input placeholder="Phone Number" type="tel" id="principle_phone" name="principle_phone"  class="form-control-login input_box"/>
                                    </div>
                                </div>
                            </div>

                            <div class="registra-main">
                                <div class="row">
                                    <div class="col-lg-4 col-md-4 col-sm-4 col-xs-5">
                                        <label class="radio-inline no_icon">Co-ordinator First Name: </label>
                                    </div>
                                    <div class="col-lg-7 col-md-7 col-sm-8 col-xs-7">
                                        <input placeholder="Enter First Name" type="text" name="Coordinator_First_Name" class="form-control-login input_box fname" id="First_Name"/>
                                        <span class="youtube_msg-err">Max 200 CHARACTERS Allowed</span>
                                    </div>
                                </div>
                            </div>
                            
                            <div class="registra-main">
                                <div class="row">
                                    <div class="col-lg-4 col-md-4 col-sm-4 col-xs-5">
                                        <label class="radio-inline no_icon">Co-ordinator Last Name: </label>
                                    </div>
                                    <div class="col-lg-7 col-md-7 col-sm-8 col-xs-7">
                                        <input placeholder="Enter Last Name" type="text" name="Coordinator_Last_Name"  class="form-control-login input_box fname" id="First_Name"/>
                                        <span class="youtube_msg-err">Max 200 CHARACTERS Allowed</span>
                                    </div>
                                </div>
                            </div>

                            <div class="registra-main">
                                <div class="row">
                                    <div class="col-lg-4 col-md-4 col-sm-4 col-xs-5">
                                        <label class="radio-inline no_icon">Co-ordinator Mobile No: </label>
                                    </div>
                                    <div class="col-lg-7 col-md-7 col-sm-8 col-xs-7">
                                        <input placeholder="Phone Number" type="tel" id="coordinater_phone" name="coordinater_phone"  class="form-control-login input_box"/>
                                    </div>
                                </div>
                            </div>

                            <div class="registra-main">
                                <div class="row">
                                    <div class="col-lg-4 col-md-4 col-sm-4 col-xs-5">
                                        <label class="radio-inline no_icon">Co-ordinater Email: </label>
                                    </div>
                                    <div class="col-lg-7 col-md-7 col-sm-8 col-xs-7">
                                        <input placeholder="abc@host.com" type="email" name="Email" class="form-control-login input_box semail" id="Email"/>
                                        <span class="youtube_msg-err">Max 50 CHARACTERS Allowed</span>
                                    </div>
                                </div>
                            </div>

                            <div class="registra-main">
                                <div class="row">
                                    <div class="col-lg-4 col-md-4 col-sm-4 col-xs-5">
                                        <label class="radio-inline-file no_icon">Upload Consent Letter: </label>
                                        <span class="youtube_msg-err">(PDF, JPG, PNG max 2 MB)</span>
                                    </div>

                                    <div class="col-lg-7 col-md-7 col-sm-8 col-xs-7">
                                        <input type="file" name="Consent_Letter" class="form-control-login input_box"/>
                                    </div>
                                </div>
                            </div>
                            
                            <div class="registra-main-last">
                                <div class="offset-sm-3 offset-xs-3 offset-md-3 offset-lg-3 col-lg-6 col-md-6 col-sm-6 col-xs-6 div_spacing">
                                    <Link to="/login_otp">
                                                <button className="form-control-login btn btn-success btn-lg" id="Register_Spoc">
                                                Register_Spoc
                                                </button>
                                    </Link>                              
                                </div>
                                <div class=" col-lg-12 col-md-12 col-sm-12 col-xs-12 ">
                                    <span class="signup_Link_bottom">Already Have An Account? <a href="/">Login</a></span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
export default Spoc_Registration;