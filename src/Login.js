
import React from "react";

function Login(){
    return(
        <section class="login-box custom">
            <div class="container">
                <div class="row">     
                    <div class="intro clearfix " >
                        <div class="offset-md-2 offset-lg-2 col-lg-8 col-md-8 col-sm-12 col-xs-12 is-visible">
                            <form class="form-horizontal" role="form" method="POST" action="" id="thisform">
                                <input type="hidden" name="_token" value="8Woq1wkqcB3fghwkWuIRo3W1OnvBqZBMsquiXjVH"/>
                                <div class="row type-margin">
                                    <img class="center" draggable="false"  alt="" aria-hidden="true" src={require("./App Logo.png")} />
                                    <div class=" col-lg-7 col-md-7 col-sm-12 col-xs-12">
                                        <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 div_spacing ">
                                            <input placeholder="Phone Number" type="tel" id="phone" name="phone"  class="form-control-login input_box"/>
                                        </div>
                                        <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 div_spacing ">
                                            <select name="role" class="form-control input_box">
                                                <option value="">Please Select User Role</option>
                                                <option value="admin">Admin</option>
                                                <option value="spoc">SPOC</option>
                                            </select>
                                        </div>
                                        <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 div_spacing">   
                                            <input type="submit" id="edit-submit" name="op" value="Send OTP" class="form-control-login btn btn-success btn-lg"/>
                                        </div>
                                        <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 div_spacing in-line">
                                            Don't Have Account? <a href="/">Register Now</a>  
                                        </div>
                                        <div class="alert alert-info" >
                                            Registration for School SPOC are now open
                                        </div>
                                    </div>  
                                </div>
                            </form>     
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
export default Login;


