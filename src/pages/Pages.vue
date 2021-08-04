<template>
  <div class="container-fluid m-0 p-0">
      
      <div id="home" class="full-height p-4">
          <div class="container pt-3">
              <div class="row pb-5">
                  
                  <div class="col-lg-6 pt-4 my-auto">
                    <img id="mockup1" src="../assets/SWMockup.png" class="img-fluid" alt="mockup1"/>
                  </div>
                  
                  <div class="col-lg-6 my-auto pt-4">
                      <div class="p-3 p-md-5 rounded shadow">
                          <h2>Serena Williams Academy!</h2>
                          <form @submit.prevent="addEmail(email)">
                              <div class="form-group">
                                  <label for="emailSignUp">Starts your free trial right now! We'll contact you with all steps.</label>
                                  <input 
                                  v-model="email"
                                  type="email"
                                  id="emailSignUp" 
                                  placeholder="Enter your E-mail"
                                  class="form-control"
                                  >
                                  <small id="emailHelp" class="form-text">We'll never share your personal email adress.</small>
                                  <button type="submit" class="btn btn-dark mt-3">Join us!</button>
                                  <div class="mt-4">
                                      <p class="m-0">{{message}}</p>
                                  </div>
                              </div>
                          </form>
                      </div>

                    <div class="p-2">
                        <h4 id="text" class="text-center mb-2 mt-3">Available On</h4>
                        <div class="row">
                            <div class="col my-auto">
                                <a href="https://www.apple.com/la/app-store/" target="_blank">
                                    <img src="../assets/appstore.jpg" class="float-right img-fluid" alt="appstore">
                                </a>
                            </div>
                            <div class="col my-auto">
                                <a href="https://play.google.com/store?hl=es" target="_blank">
                                    <img src="../assets/googleplay.png" class="float-right img-fluid" alt="googleplay">
                                </a>
                            </div>
                        </div>
                    </div>
                  </div>

              </div>
          </div>
      </div>
      
      <div id="about" class="p-3 p-md-5">
          <div class="row">
              <div class="col-lg">
                  <img src="https://cdn0.scrvt.com/c2465e9022ba946df66d1244a69b1c75/bea0c3dcd041f1b0/5ee7df50febf/v/ba2be214d51e/lottie-dod-grandslam.jpg" class="m-4" height="100" alt="about1">
                  <h5 class="ml-md-4 mr-md-4">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto suscipit, aliquid nemo, totam rem illo sit reprehenderit ea nisi, ipsum saepe qui itaque soluta repudiandae? Accusamus eius distinctio et illum.
                  </h5>
              </div>
              <div class="col-lg">
                  <img src="https://www.clipartmax.com/png/full/134-1347751_grand-slam-french-open-tennis-trophy.png" class="m-4" height="100" alt="about2">
                  <h5 class="ml-md-4 mr-md-4">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto suscipit, aliquid nemo, totam rem illo sit reprehenderit ea nisi, ipsum saepe qui itaque soluta repudiandae? Accusamus eius distinctio et illum.
                  </h5>
              </div>
              <div class="col-lg">
                  <img src="https://cdn0.scrvt.com/c2465e9022ba946df66d1244a69b1c75/bea0c3dcd041f1b0/5ee7df50febf/v/ba2be214d51e/lottie-dod-grandslam.jpg" class="m-4" height="100" alt="about3">
                  <h5 class="ml-md-4 mr-md-4">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto suscipit, aliquid nemo, totam rem illo sit reprehenderit ea nisi, ipsum saepe qui itaque soluta repudiandae? Accusamus eius distinctio et illum.
                  </h5>
              </div>
        </div>
      </div>

      <div id="price" class="p-3 p-md-5">
          <div class="row">
              <div class="col-lg">
                    <div class="text-center mb-3 d-block d-lg-none">
                        <img src="../assets/SWMockup1.png" class="img-fluid" alt="mockup2"/>
                        <img src="../assets/Price.png" class="img-fluid" alt="price"/>
                    </div>                  
                  <img id="mockup3" src="../assets/mockupyprecio.png" height="650" class="d-none d-lg-block img-fluid" alt="mockup3">
              </div>

        </div>
      </div>

      <div id="contact" class="p-4">
          <div class="row justify-content-center mt-3 mb-3">
              
              <div v-if= "show_contact == true" class="col-lg-4">
                  <h2>Do you have any questions?</h2>
                  <p id="text">Contact us by filling out the information below</p>

                    <div v-if="contact_notice != ''" class="alert alert-warning">
                        There was a problem submitting your message. {{contact_notice}}
                    </div>

                <form @submit.prevent="sendContactMessage()">
                    <div class="form-group text-left">
                        <input 
                        v-model="contact_email"
                        type="email"
                        class="form-control"
                        placeholder="Enter your E-mail"
                        >
                        <textarea
                        v-model="contact_message"
                        class="form-control mt-3"
                        placeholder="Enter your message"
                        rows="5"
                        ></textarea>
                    </div>
                    <button type="submit" class="btn btn-dark">Send Message</button>
                </form> 
              </div>
              <div v-else>
                  <h3>Message Sent Successfully!</h3>
                  <p>Thank you for contacting us, we'll get back to you as soon as we can.</p>
              </div>
          </div>
      </div>

  </div>
</template>

<script>
import {Auth} from '@/firebase/auth.js'
export default{
    data(){
        return{
            email: '',
            message: '',
            show_contact: true,
            contact_email: '',
            contact_message: '',
            contact_notice: '',
        }
    },
    methods: {
        async addEmail(email){
            var noticeMessage = "Your account has been reserved!"
            await Auth.createUserWithEmailAndPassword(email, this.randomPassword(20)).catch(function(error){
                if (error.code != "auth/email-already-in-use"){
                noticeMessage = error.message;
                }
            })
            this.message = noticeMessage;
            this.email = ""
            
        },
        randomPassword (length){
            var chars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
            var password = "";
            for (var x = 0; x < length; x++){
                var i = Math.floor(Math.random()*chars.length);
                password += chars.charAt(i)
            }
            return password;
        },
        sendContactMessage(){
            if (!this.validEmail(this.contact_email)){
                this.contact_notice = "The e-mail adress is badly formatted."
            
            } else if (this.contact_message.length < 20) {
                this.contact_notice= "Your message is too short"
            } 
            else this.show_contact = false
        },
        validEmail(email){
            var re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            return re.test(email);
        }
    }
}
</script>

<style>
#home{
    background: radial-gradient(circle, rgba(37,37,37,0.8883928571428571) 0%, rgba(14,14,14,1) 100%);
    margin-top: 20px; 
}

#about{
    min-height: 30vh;
    background-color: black;
}

#price{
    background: radial-gradient(circle, rgba(37,37,37,0.8883928571428571) 0%, rgba(14,14,14,1) 100%);
    min-height: 30vh;
}

#mockup1{
    max-height: 90vh;
    margin: auto;
}

#mockup3{
    max-height: 100vh;
    margin: auto;
}

#contact{
    background: black;
}

#text{
    color: rgb(185, 185, 185);
}

</style>