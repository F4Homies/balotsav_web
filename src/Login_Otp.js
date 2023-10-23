import React,{useRef} from "react";


function Login_Otp(){
    const inputRefs = [
        useRef(),
        useRef(),
        useRef(),
        useRef(),
        useRef(),
        useRef(),
      ];
    
      const handleInputChange = (index, event) => {
        if (event.target.value) {
          if (index < inputRefs.length - 1) {
            inputRefs[index + 1].current.focus();
          }
        } else if (index > 0) {
          inputRefs[index - 1].current.focus();
        }
      };

    return(
        <section class="login-box custom" >
            <div class="container">
                <div class="row">
                    <div class="intro clearfix ">
                        <div class="offset-md-2 offset-lg-2 col-lg-8 col-md-8 col-sm-12 col-xs-12 is-visible">
                            <form class="form-horizontal" id="thisform">   
                                <input type="hidden" name="_token" value="8Woq1wkqcB3fghwkWuIRo3W1OnvBqZBMsquiXjVH"/>
                                <div class="row down">
                                    <img class="center" draggable="false"  alt="" aria-hidden="true" src={require("./App Logo.png")} />
                                    <div class=" col-lg-7 col-md-7 col-sm-12 col-xs-12">
                                        <div class="verify-device">
                                            <div class="sa-sk7__app-title">
                                                <h1 class="tk-intro" tabindex="-1">Please enter the verification code </h1>
                                            </div>
                                            <div class="sa-sk7__content">
                                                <div class="verify-device__sec-code">
                                                    <div class="form-security-code">
                                                        <div class="form-security-code-inputs">
                                                        {inputRefs.map((ref, index) => (
                                                        <input
                                                            key={index}
                                                            ref={ref}
                                                            class="form-security-code-input"
                                                            type="tel"
                                                            autocapitalize="off"
                                                            autocorrect="off"
                                                            spellcheck="false"
                                                            autoComplete="off"
                                                            aria-label={`Digit ${index + 1}`}
                                                            maxLength={1}
                                                            onChange={(event) => handleInputChange(index, event)}
                                                            onKeyDown={(event) => {
                                                                if (event.key === 'Backspace' && !event.target.value && index > 0) {
                                                                  inputRefs[index - 1].current.focus();
                                                                } }}
                                                            />
                                                        ))}
                                                        </div>
                                                    </div>
                                                </div>
                                            <div class="signin-container-footer">
                                                <div class="signin-container-footer__info">A message with a verification code has been sent to your Mobile Number. Please enter the code to continue.</div>
                                                    <div class="fixed-h">
                                                        <div class="signin-container-footer__link">
                                                            <div class="text text-typography-body-reduced">
                                                                <div class="inline-links">
                                                                    <div class="inline-links__link">
                                                                        <button class="button button-link button-rounded-rectangle" type="button" id="alt-options-btn">
                                                                            <span class="text text-typography-body-reduced"><h6>Re-send verification code</h6></span>
                                                                        </button>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
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

export default Login_Otp;