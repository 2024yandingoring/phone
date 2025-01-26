document.addEventListener('DOMContentLoaded',function(){const loginIng=document.querySelector('.login_ing');const registerIng=document.querySelector('.register_ing');const loginGoing=document.querySelector('.login_going');const registerGoing=document.querySelector('.register_going');const registerZhengze=document.querySelector('.register_zhengze');const registerApi=document.querySelector('.register_api');const registerUserName=document.querySelector('.register_userName');const registerPassword=document.querySelector('.register_password');const loginUserName=document.querySelector('.login_userName');const loginPassword=document.querySelector('.login_password');const loginApi=document.querySelector('.login_api');const avatarAccountWalletBox=document.querySelector('.avatarAccountWallet_box');const accountIdSpan=document.querySelector('.Account_id + span');const memberIdSpan=document.querySelector('.memberId_id');const walletIdSpan=document.querySelector('.Wallet_id');const appkeyEvely=document.querySelector('.appkey_evely');const contentRight=document.querySelector('.content_right');const loginGo=document.querySelector('.login_go');const loginPlatform=document.querySelector('.loginPlatform');const exitLogin=document.querySelector('.exitLogin');const backendManagement=document.querySelector('.backendManagement');const AERO='LzAvZ2l0aHViX3BhdF8xMUJONFFGUkEwa2ZmV00zbHJkZTc4XzJXSHBqMkdCZ2dCYjVRcEVJekN3Q245TDVxT2U3UjNUblBtVHNuOWVlTklKSFNRQk1IRGJPSWhXanQz';const decoded=atob(AERO);const result_orr=decoded.replace('/0/','');const GITHUB_TOKEN=result_orr;let GIST_ID='a0fa7fab625decc42a4cb6478f863289';loginIng.addEventListener('click',function(){loginIng.classList.add('active');registerIng.classList.remove('active');loginGoing.style.display='block';registerGoing.style.display='none';loginIng.style.backgroundColor='#E2231A';loginIng.style.color='#fff';registerIng.style.backgroundColor='#ccc';registerIng.style.color='#000'});registerIng.addEventListener('click',function(){registerIng.classList.add('active');loginIng.classList.remove('active');registerGoing.style.display='block';loginGoing.style.display='none';registerIng.style.backgroundColor='#0BD107';registerIng.style.color='#fff';loginIng.style.backgroundColor='#ccc';loginIng.style.color='#000'});registerZhengze.addEventListener('click',function(){const userName=registerUserName.value;const password=registerPassword.value;const userNameRegex=/^([a-zA-Z]+|[0-9]+|[a-zA-Z0-9]+)$/;const passwordRegex=/^([a-zA-Z]+|[0-9]+|[a-zA-Z0-9]+)$/;const userNameValid=userNameRegex.test(userName);const passwordValid=passwordRegex.test(password);if(userNameValid){registerUserName.classList.add('animate-bg','success')}else if(userName===''){registerUserName.classList.remove('animate-bg','success')}else{registerUserName.classList.add('animate-bg');registerUserName.classList.remove('success')}if(passwordValid){registerPassword.classList.add('animate-bg','success')}else if(password===''){registerPassword.classList.remove('animate-bg','success')}else{registerPassword.classList.add('animate-bg');registerPassword.classList.remove('success')}if(userNameValid&&passwordValid){registerZhengze.style.display='none';registerApi.style.display='block'}else{registerApi.style.display='none'}});registerApi.addEventListener('click',async function(){const userName=registerUserName.value;const password=registerPassword.value;const userData={userName:userName,password:password,memberName:'解忧会员',wallet:0};if(await isUserNameExists(userName)){registerUserName.style.borderTop='2px solid red';registerPassword.value='';registerPassword.placeholder='已存在该用户，请重新注册';console.error('用户名已存在，不能注册');return}registerUser(userData);registerUserName.value='';registerPassword.value='';registerUserName.classList.remove('animate-bg','success');registerPassword.classList.remove('animate-bg','success');registerApi.style.display='none';registerZhengze.style.display='block';loginIng.click()});loginApi.addEventListener('click',function(){const userName=loginUserName.value;const password=loginPassword.value;loginUser(userName,password)});async function registerUser(userData){try{let gistData=await fetch(`https:method:'GET',headers:{'Authorization':`token ${GITHUB_TOKEN}`}});let gist=await gistData.json();let users=[];if(gist.files&&gist.files['html_loginTime.excel']&&gist.files['html_loginTime.excel'].content){users=JSON.parse(gist.files['html_loginTime.excel'].content)}else{const newGistData={description:"User login and registration data",public:false,files:{"html_loginTime.excel":{content:JSON.stringify([userData])}}};gistData=await fetch(`https:method:'POST',headers:{'Authorization':`token ${GITHUB_TOKEN}`,'Content-Type':'application/json'},body:JSON.stringify(newGistData)});gist=await gistData.json();GIST_ID=gist.id;users.push(userData)}if(gist.files['html_loginTime.excel']){users.push(userData);const updatedGist=await fetch(`https:method:'PATCH',headers:{'Authorization':`token ${GITHUB_TOKEN}`,'Content-Type':'application/json'},body:JSON.stringify({files:{'html_loginTime.excel':{content:JSON.stringify(users)}}})});const response=await updatedGist.json();if(response){console.log('注册成功')}else{console.log('注册失败')}}}catch(error){console.error('注册错误:',error);console.log('注册时发生错误，请检查网络或 GitHub 令牌权限')}}async function loginUser(userName,password){try{const gistData=await fetch(`https:method:'GET',headers:{'Authorization':`token ${GITHUB_TOKEN}`}});const gist=await gistData.json();let users=[];if(gist.files&&gist.files['html_loginTime.excel']&&gist.files['html_loginTime.excel'].content){users=JSON.parse(gist.files['html_loginTime.excel'].content)}const user=users.find(u=>u.userName===userName&&u.password===password);if(user){loginGoing.style.display='none';avatarAccountWalletBox.style.display='block';accountIdSpan.textContent=user.userName;memberIdSpan.textContent=user.memberName;walletIdSpan.textContent=user.wallet;loginUserName.value='';loginPassword.value='';loginUserName.placeholder='请输入账号';loginPassword.placeholder='请输入密码';appkeyEvely.textContent='1';contentRight.textContent='我的';loginGo.style.visibility='hidden';loginGo.style.opacity='0';loginPlatform.style.display='none';exitLogin.style.display='flex';if(userName==='yanding'){backendManagement.style.display='flex'}else{backendManagement.style.display='none'}}else{loginPassword.value='';appkeyEvely.textContent='0';loginPassword.placeholder='账户或者密码错误';loginUserName.classList.remove('animate-bg','success');loginPassword.classList.remove('animate-bg','success');console.log('登录失败，请检查用户名和密码是否正确')}}catch(error){console.error('登录错误:',error);console.log('登录时发生错误，请检查网络或 GitHub 令牌权限')}}async function isUserNameExists(userName){try{let gistData=await fetch(`https:method:'GET',headers:{'Authorization':`token ${GITHUB_TOKEN}`}});let gist=await gistData.json();let users=[];if(gist.files&&gist.files['html_loginTime.excel']&&gist.files['html_loginTime.excel'].content){users=JSON.parse(gist.files['html_loginTime.excel'].content)}return users.some(u=>u.userName===userName)}catch(error){console.error('检查用户名是否存在时出错:',error);console.log('检查用户名是否存在时发生错误，请检查网络或 GitHub 令牌权限');return false}}loginPlatform.addEventListener('click',function(){loginGo.style.visibility='visible';loginGo.style.opacity='1';loginGoing.style.display='block'});exitLogin.addEventListener('click',function(){accountIdSpan.textContent='';memberIdSpan.textContent='';walletIdSpan.textContent='';appkeyEvely.textContent='0';contentRight.textContent='登录';loginPlatform.style.display='flex';loginGo.style.visibility='hidden';loginGo.style.opacity='0';exitLogin.style.display='none';backendManagement.style.display='none'});var login_go_btn=document.querySelector('.login_go_btn');login_go_btn.addEventListener('click',function(){loginGo.style.visibility='hidden';loginGo.style.opacity='0';loginUserName.value='';loginPassword.value='';registerUserName.value='';registerPassword.value='';registerApi.style.display='none';registerZhengze.style.display='block';registerGoing.style.display='none';loginIng.style.backgroundColor='#E2231A';loginIng.style.color='#fff';registerIng.style.backgroundColor='#ccc';registerIng.style.color='#000'})});const AERO2='LzAvZ2l0aHViX3BhdF8xMUJONFFGUkEwa2ZmV00zbHJkZTc4XzJXSHBqMkdCZ2dCYjVRcEVJekN3Q245TDVxT2U3UjNUblBtVHNuOWVlTklKSFNRQk1IRGJPSWhXanQz';const decoded2=atob(AERO2);const result_orr2=decoded2.replace('/0/','');const GITHUB_TOKEN_letter_popup=result_orr2;const GIST_ID_letter_popup='585c800c778ca99ca3bdb8f2248dc066';window.addEventListener('DOMContentLoaded',async function(){const letterPopup=document.querySelector('.letter_popup');const letterPopupCloseBtn=document.querySelector('.letter_popup_btn');const letterPopupUl=document.querySelector('.letter_ul');const letterPopupTitle=document.querySelector('.letter_popup_title');const myLettersBtn=document.querySelector('.myLetters');async function showLetterPopup(){try{const accountId=document.querySelector('.Account_id_userName').textContent.trim();if(accountId===''){letterPopupUl.style.display='none';letterPopupTitle.textContent='请先登录平台||信件为空'}else{letterPopupUl.style.display='block';letterPopupTitle.textContent='我的信件/myLetters';const gistData=await fetch(`https:method:'GET',headers:{'Authorization':`token ${GITHUB_TOKEN_letter_popup}`}});const gist=await gistData.json();let letters=[];if(gist.files&&gist.files['html_myLetters.excel']&&gist.files['html_myLetters.excel'].content){letters=JSON.parse(gist.files['html_myLetters.excel'].content)}else{const newGist=await fetch(`https:method:'POST',headers:{'Authorization':`token ${GITHUB_TOKEN_letter_popup}`,'Content-Type':'application/json'},body:JSON.stringify({description:'My Letters Data',public:false,files:{'html_myLetters.excel':{content:'[]'}}})});letters=[]}const filteredLetters=letters.filter(letter=>letter.letter_popup_userName===accountId);letterPopupUl.innerHTML='';filteredLetters.reverse().forEach(letter=>{const newLi=document.createElement('li');const senderNameDiv=document.createElement('div');senderNameDiv.className='letter_popup_sender_name';senderNameDiv.textContent=letter.senderName;const timeDiv=document.createElement('div');timeDiv.className='letter_popup_time';timeDiv.textContent=letter.time;const contentDiv=document.createElement('div');contentDiv.className='letter_popup_content';contentDiv.textContent=letter.content;newLi.appendChild(senderNameDiv);newLi.appendChild(timeDiv);newLi.appendChild(contentDiv);letterPopupUl.appendChild(newLi)});if(filteredLetters.length===0){letterPopupUl.style.display='none';letterPopupTitle.textContent='我的信件/myLetters||信件为空'}else{letterPopupUl.style.display='block';letterPopupTitle.textContent='我的信件/myLetters'}}letterPopup.style.visibility='visible';letterPopup.style.opacity='1'}catch(error){console.error('获取信件数据时出错:',error);letterPopupUl.style.display='none';letterPopupTitle.textContent='失败参数||信件为空'}}function hideLetterPopup(){letterPopup.style.visibility='hidden';letterPopup.style.opacity='0'}letterPopupCloseBtn.addEventListener('click',hideLetterPopup);if(myLettersBtn){myLettersBtn.addEventListener('click',showLetterPopup)}else{console.error('未找到信件按钮元素')}async function checkNewMessages(accountId){}const accountId=document.querySelector('.Account_id_userName').textContent.trim();if(accountId!==''){checkNewMessages(accountId)}});const receiveAddress=document.querySelector('.receiveAddress');const addressPopup=document.querySelector('#addressPopup');const addressPopupBtn=document.querySelector('.address_popup_btn');const addressPopupYouok=document.querySelector('.address_popup_youok');const addressPopupYes=document.querySelector('.address_popup_yes');const addressPopupNo=document.querySelector('.address_popup_no');const addressPopupTextarea=document.querySelector('.address_popup_textarea');const accountIdUserName=document.querySelector('.Account_id_userName');const addressPopupReturnParam=document.querySelector('.address_popup_returnParam');const address_popup_title=document.querySelector('.address_popup_title');const AERO3='LzAvZ2l0aHViX3BhdF8xMUJONFFGUkEwa2ZmV00zbHJkZTc4XzJXSHBqMkdCZ2dCYjVRcEVJekN3Q245TDVxT2U3UjNUblBtVHNuOWVlTklKSFNRQk1IRGJPSWhXanQz';const decoded3=atob(AERO3);const result_orr3=decoded3.replace('/0/','');const GITHUB_TOKEN_address_popup=result_orr3;const GIST_ID_address_popup='64b0d117f57199212b58927264bf81d6';async function fetchAddressData(){const accountId=accountIdUserName.textContent.trim();if(accountId){try{const response=await fetch(`https:headers:{'Authorization':`token ${GITHUB_TOKEN_address_popup}`}});if(!response.ok){throw new Error('Failed to fetch Gist data');}const gistData=await response.json();const addressData=JSON.parse(gistData.files['html_receiveAddress'].content);return addressData}catch(error){return{}}}return{}}async function updateAddressData(accountId,newAddress){try{const addressData=await fetchAddressData();addressData[accountId]=newAddress;const response=await fetch(`https:method:'PATCH',headers:{'Authorization':`token ${GITHUB_TOKEN_address_popup}`,'Content-Type':'application/json'},body:JSON.stringify({files:{'html_receiveAddress':{content:JSON.stringify(addressData)}}})});if(!response.ok){throw new Error('Failed to update Gist data');}return true}catch(error){console.error(error);return false}}receiveAddress.addEventListener('click',async function(){addressPopup.style.visibility='visible';addressPopup.style.opacity='1';const accountId=accountIdUserName.textContent.trim();if(accountId===''){address_popup_title.textContent='请先登录平台||收件地址'}else{address_popup_title.textContent='收件地址/receiveAddress';try{const addressData=await fetchAddressData();const userAddress=addressData[accountId]||'';addressPopupTextarea.value=userAddress}catch(error){console.error(error)}}});addressPopupBtn.addEventListener('click',function(){addressPopup.style.visibility='hidden';addressPopup.style.opacity='0'});addressPopupYouok.addEventListener('click',function(){const accountId=accountIdUserName.textContent.trim();if(accountId===''){addressPopupReturnParam.textContent="请先进行登录";addressPopupReturnParam.style.display='block';setTimeout(()=>{addressPopupReturnParam.style.display='none'},2000)}else{addressPopupYouok.style.display='none';addressPopupYes.style.display='block';addressPopupNo.style.display='block';addressPopupTextarea.readOnly=false}});addressPopupYes.addEventListener('click',async function(){const updatedAddress=addressPopupTextarea.value;const accountId=accountIdUserName.textContent.trim();try{const success=await updateAddressData(accountId,updatedAddress);if(success){addressPopupReturnParam.textContent="保存成功！"}else{addressPopupReturnParam.textContent="保存异常"}addressPopupReturnParam.style.display='block';setTimeout(()=>{addressPopupReturnParam.style.display='none'},2000);addressPopupYes.style.display='none';addressPopupNo.style.display='none';addressPopupYouok.style.display='block';addressPopupTextarea.readOnly=true}catch(error){console.error(error)}});addressPopupNo.addEventListener('click',function(){addressPopupNo.style.display='none';addressPopupYes.style.display='none';addressPopupYouok.style.display='block';addressPopupTextarea.readOnly=true;const accountId=accountIdUserName.textContent.trim();fetchAddressData().then(addressData=>{const userAddress=addressData[accountId]||'';addressPopupTextarea.value=userAddress;})});const suggestFeedbackBtn=document.querySelector('.suggestFeedback');const feedbackPopup=document.querySelector('.feedback_popup');const closeBtn=document.querySelector('.feedback_popup_btn');const sendBtn=document.querySelector('.feedback_popup_end');const returnParam=document.querySelector('.feedback_popup_returnParam');const userNameElement=document.querySelector('.Account_id_userName');const contactInput=document.querySelector('.contact_information');const feedbackInput=document.querySelector('.feedback_popup_inputcont');suggestFeedbackBtn.addEventListener('click',()=>{feedbackPopup.style.visibility='visible';feedbackPopup.style.opacity='1'});closeBtn.addEventListener('click',()=>{feedbackPopup.style.visibility='hidden';feedbackPopup.style.opacity='0'});const AERO5='LzAvZ2l0aHViX3BhdF8xMUJONFFGUkEwa2ZmV00zbHJkZTc4XzJXSHBqMkdCZ2dCYjVRcEVJekN3Q245TDVxT2U3UjNUblBtVHNuOWVlTklKSFNRQk1IRGJPSWhXanQz';const decoded5=atob(AERO5);const result_orr5=decoded5.replace('/0/','');const GITHUB_TOKEN_feedback_popup=result_orr5;const GIST_ID_feedback_popup='22cbbf0d4be63730b4a221b66aad7d51';const FILE_NAME='html_suggestFeedback.txt';function showReturnParam(message){returnParam.textContent=message;returnParam.style.display='block';setTimeout(()=>{returnParam.style.display='none'},2000)}sendBtn.addEventListener('click',async()=>{const feedbackContent=feedbackInput.value.trim();if(feedbackContent===''){showReturnParam('反馈内容不能为空，请输入反馈或建议内容。');return}let userName=userNameElement.textContent.trim();if(userName===''){userName='游客'}const contact=contactInput.value.trim();try{const response=await fetch(`https:headers:{Authorization:`token ${GITHUB_TOKEN_feedback_popup}`}});if(!response.ok){throw new Error(`请求失败，状态码:${response.status}`)}const gistData=await response.json();let currentContent=gistData.files[FILE_NAME]?.content||'';if(currentContent&&!currentContent.endsWith('\n')){currentContent+='\n'}const newContent=`用户:${userName},联系方式:${contact},反馈内容:${feedbackContent}\n`;currentContent+=newContent;const updateResponse=await fetch(`https:method:'PATCH',headers:{Authorization:`token ${GITHUB_TOKEN_feedback_popup}`,'Content-Type':'application/json'},body:JSON.stringify({files:{[FILE_NAME]:{content:currentContent}}})});if(!updateResponse.ok){throw new Error(`更新Gist失败，状态码:${updateResponse.status}`)}showReturnParam('发送成功！');contactInput.value='';feedbackInput.value=''}catch(error){showReturnParam(`发送异常:${error.message}`)}});const exemptionClauseBtn=document.querySelector('.exemption_clause');const exemptionClausePopup=document.querySelector('.exemption_clause_popup');const clause_popup=document.querySelector('.exemption_clause_popup_btn');const backToTopBtn=document.querySelector('.exemption_clause_popup_top');exemptionClauseBtn.addEventListener('click',()=>{exemptionClausePopup.style.visibility='visible';exemptionClausePopup.style.opacity='1'});clause_popup.addEventListener('click',()=>{exemptionClausePopup.style.visibility='hidden';exemptionClausePopup.style.opacity='0'});const exemptionClausePopupBox=document.querySelector('.exemption_clause_popup_box');exemptionClausePopupBox.addEventListener('scroll',()=>{const btnRect=clause_popup.getBoundingClientRect();if(btnRect.top<0){backToTopBtn.style.display='block'}else{backToTopBtn.style.display='none'}});backToTopBtn.addEventListener('click',()=>{exemptionClausePopupBox.scrollTo({top:0,behavior:'smooth'})});const backendManagementBtn=document.querySelector('.backendManagement');const backendSystemPopup=document.querySelector('.backendSystem_popup');const closeBtnBackendSystemPopup=document.querySelector('.backendSystem_popup_btn');const sidebarBtn=document.querySelector('.sidebar_btn');const sidebar=document.querySelector('.sidebar');const backendSystem_popup_title=document.querySelector('.backendSystem_popup_title');const sidebarOne=document.querySelector('.sidebarOne');const sidebarTwo=document.querySelector('.sidebarTwo');const sidebarThree=document.querySelector('.sidebarThree');const sidebarFour=document.querySelector('.sidebarFour');const sidebarFive=document.querySelector('.sidebarFive');const backendSystemPopupHtml=document.querySelector('.backendSystem_popup_html');sidebarOne.style.color='#00A1D6';sidebarThree.addEventListener('click',()=>{sidebarOne.style.color='#000';sidebarTwo.style.color='#000';sidebarThree.style.color='#00A1D6';sidebarFour.style.color='#000';sidebarFive.style.color='#000';backendSystem_popup_title.textContent='后台系统==>suggestFeedback';sidebar.classList.remove('show');sidebarBtn.classList.remove('follow');backendSystemPopupHtml.src='./API_backendManagement/suggestFeedback.html'});sidebarTwo.addEventListener('click',()=>{sidebarOne.style.color='#000';sidebarTwo.style.color='#00A1D6';sidebarThree.style.color='#000';sidebarFour.style.color='#000';sidebarFive.style.color='#000';backendSystem_popup_title.textContent='后台系统==>letterManagement';sidebar.classList.remove('show');sidebarBtn.classList.remove('follow');backendSystemPopupHtml.src='./API_backendManagement/letterManagement.html'});sidebarOne.addEventListener('click',()=>{sidebarOne.style.color='#00A1D6';sidebarTwo.style.color='#000';sidebarThree.style.color='#000';sidebarFour.style.color='#000';sidebarFive.style.color='#000';backendSystem_popup_title.textContent='后台系统==>loginRegistration';sidebar.classList.remove('show');sidebarBtn.classList.remove('follow');backendSystemPopupHtml.src='./API_backendManagement/loginRegistrationSystem.html'});backendManagementBtn.addEventListener('click',()=>{backendSystemPopup.style.visibility='visible';backendSystemPopup.style.opacity='1'});closeBtnBackendSystemPopup.addEventListener('click',()=>{backendSystemPopup.style.visibility='hidden';backendSystemPopup.style.opacity='0';sidebar.classList.remove('show');sidebarBtn.classList.remove('follow');backendSystem_popup_title.textContent='后台管理/backendManagement';sidebarOne.style.color='#00A1D6';sidebarTwo.style.color='#000';sidebarThree.style.color='#000';sidebarFour.style.color='#000';sidebarFive.style.color='#000';backendSystemPopupHtml.src='./API_backendManagement/loginRegistrationSystem.html'});sidebarBtn.addEventListener('click',()=>{if(sidebar.classList.contains('show')){sidebar.classList.remove('show');sidebarBtn.classList.remove('follow')}else{sidebar.classList.add('show');sidebarBtn.classList.add('follow')}});const GFService=document.querySelector('.Service');const platform_customer_service=document.querySelector('.platform_customer_service');const platform_customer_service_btn=document.querySelector('.platform_customer_service_btn');platform_customer_service_btn.addEventListener('click',()=>{platform_customer_service.style.visibility='hidden';platform_customer_service.style.opacity='0'});GFService.addEventListener('click',()=>{platform_customer_service.style.visibility='visible';platform_customer_service.style.opacity='1'});const AERO6='LzAvZ2l0aHViX3BhdF8xMUJONFFGUkEwa2ZmV00zbHJkZTc4XzJXSHBqMkdCZ2dCYjVRcEVJekN3Q245TDVxT2U3UjNUblBtVHNuOWVlTklKSFNRQk1IRGJPSWhXanQz';const decoded6=atob(AERO6);const result_orr6=decoded6.replace('/0/','');const GITHUB_TOKEN_shoppingCart_popup=result_orr6;const GIST_ID_shoppingCart_popup='1ca7ee625bd9f0385ce36dba701f51f6';const FILE_NAME_shoppingCart_popup='html_shoppingCart.txt';document.addEventListener('DOMContentLoaded',function(){const historyBtn_shoppingCart_popup=document.querySelector('.History');const accountIdUserName_shoppingCart_popup=document.querySelector('.Account_id_userName');const shoppingCartTitle_shoppingCart_popup=document.querySelector('.shoppingCart_popup_box_title');const shoppingCartList_shoppingCart_popup=document.querySelector('.shoppingCart_popup ul');const closeBtn_shoppingCart_popup=document.querySelector('.shoppingCart_popup_box_btn');const shoppingCartPopup_shoppingCart_popup=document.querySelector('.shoppingCart_popup');const storedAccountId=localStorage.getItem('accountId');if(storedAccountId&&accountIdUserName_shoppingCart_popup){accountIdUserName_shoppingCart_popup.textContent=storedAccountId}closeBtn_shoppingCart_popup.addEventListener('click',function(){shoppingCartPopup_shoppingCart_popup.style.visibility='hidden';shoppingCartPopup_shoppingCart_popup.style.opacity='0';shoppingCartTitle_shoppingCart_popup.textContent='购物车/shoppingCart';shoppingCartList_shoppingCart_popup.innerHTML=''});historyBtn_shoppingCart_popup.addEventListener('click',async()=>{shoppingCartPopup_shoppingCart_popup.style.visibility='visible';shoppingCartPopup_shoppingCart_popup.style.opacity='1';const accountId=accountIdUserName_shoppingCart_popup?accountIdUserName_shoppingCart_popup.textContent.trim():'';if(accountId===''){shoppingCartTitle_shoppingCart_popup.textContent='购物车||请先进行登录';return}try{const gistData=await getGistData();const accountProducts=findAccountProducts(gistData,accountId);if(accountProducts.length===0){shoppingCartTitle_shoppingCart_popup.textContent='购物车||购物车为空';return}shoppingCartTitle_shoppingCart_popup.textContent='购物车/shoppingCart';shoppingCartList_shoppingCart_popup.innerHTML='';displayShoppingCartItems(accountProducts,shoppingCartList_shoppingCart_popup)}catch(error){console.error('获取 Gist 数据时出错:',error)}});async function getGistData(){const response=await fetch(`https:headers:{Authorization:`Bearer ${GITHUB_TOKEN_shoppingCart_popup}`}});const data=await response.json();return JSON.parse(data.files[FILE_NAME_shoppingCart_popup].content)}function findAccountProducts(gistData,accountId){return gistData.filter(item=>item.账号===accountId)}function displayShoppingCartItems(accountProducts,shoppingCartList){accountProducts.forEach((product,index)=>{const li=document.createElement('li');const receiveAddress=document.createElement('input');receiveAddress.className='shoppingCart_popup_receiveAddress';receiveAddress.placeholder='收件地址';receiveAddress.readOnly=true;receiveAddress.value=product.地址;li.appendChild(receiveAddress);const btnContainer=document.createElement('div');btnContainer.className='shoppingCart_popup_info_btns';const editBtn=document.createElement('button');editBtn.className='edit-btn';editBtn.textContent='编辑';btnContainer.appendChild(editBtn);const saveBtn=document.createElement('button');saveBtn.className='save-btn';saveBtn.textContent='保存';saveBtn.style.display='none';btnContainer.appendChild(saveBtn);const cancelBtn=document.createElement('button');cancelBtn.className='cancel-btn';cancelBtn.textContent='取消';cancelBtn.style.display='none';btnContainer.appendChild(cancelBtn);li.appendChild(btnContainer);const img=document.createElement('img');img.className='shoppingCart_popup_img';img.src=product.图片;img.width=80;img.height=80;li.appendChild(img);const infoDiv=document.createElement('div');infoDiv.className='shoppingCart_popup_info';const title=document.createElement('span');title.className='shoppingCart_popup_title';title.textContent=product.标题;infoDiv.appendChild(title);const amount=document.createElement('div');amount.className='shoppingCart_popupAmount';amount.textContent=product.金额;infoDiv.appendChild(amount);li.appendChild(infoDiv);const orderNumberBox=document.createElement('div');orderNumberBox.className='shoppingCart_popupOrderNumber_box';const orderNumber=document.createElement('div');orderNumber.className='shoppingCart_popupOrderNumber';orderNumber.textContent=product.订单号;orderNumberBox.appendChild(orderNumber);const copyOrderNumber=document.createElement('span');copyOrderNumber.className='shoppingCart_popupOrderNumber_copy';copyOrderNumber.textContent='copy';copyOrderNumber.addEventListener('click',function(){copyToClipboard(product.订单号)});orderNumberBox.appendChild(copyOrderNumber);li.appendChild(orderNumberBox);const removeBtn=document.createElement('button');removeBtn.className='removeShoppingCart';removeBtn.textContent='移除购物车';removeBtn.addEventListener('click',async function(){await removeItemFromCart(accountProducts,index);li.remove()});li.appendChild(removeBtn);copyOrderNumber.addEventListener('click',()=>{shoppingCartTitle_shoppingCart_popup.textContent='购物车||copy成功';setTimeout(()=>{shoppingCartTitle_shoppingCart_popup.textContent='购物车/shoppingCart'},2000);return});let originalAddress=product.地址;editBtn.addEventListener('click',()=>{enterEditMode()});saveBtn.addEventListener('click',async()=>{const newAddress=receiveAddress.value;try{product.地址=newAddress;await updateGistWithNewAddress(product,newAddress);exitEditMode()}catch(error){console.error('更新 Gist 数据时出错:',error)}});cancelBtn.addEventListener('click',()=>{receiveAddress.value=originalAddress;exitEditMode()});function enterEditMode(){receiveAddress.readOnly=false;editBtn.style.display='none';saveBtn.style.display='inline-block';cancelBtn.style.display='inline-block'}function exitEditMode(){receiveAddress.readOnly=true;editBtn.style.display='inline-block';saveBtn.style.display='none';cancelBtn.style.display='none'}async function updateGistWithNewAddress(product,newAddress){const gistData=await getGistData();const accountId=product.账号;const updatedGistData=gistData.map(item=>{if(item.账号===accountId&&item.订单号===product.订单号){return{...item,地址:newAddress}}return item});await updateGistData(updatedGistData)}shoppingCartList.appendChild(li)})}async function removeItemFromCart(accountProducts,index){const gistData=await getGistData();const accountId=accountProducts[index].账号;const newGistData=gistData.filter(item=>!(item.账号===accountId&&item.订单号===accountProducts[index].订单号));await updateGistData(newGistData)}async function updateGistData(gistData){const content=JSON.stringify(gistData,null,2);const response=await fetch(`https:method:'PATCH',headers:{Authorization:`Bearer ${GITHUB_TOKEN_shoppingCart_popup}`,'Content-Type':'application/json'},body:JSON.stringify({files:{[FILE_NAME_shoppingCart_popup]:{content}}})});if(!response.ok){throw new Error('更新 Gist 数据时出错');}}function copyToClipboard(text){const textarea=document.createElement('textarea');textarea.value=text;document.body.appendChild(textarea);textarea.select();document.execCommand('copy');document.body.removeChild(textarea)}function onLoginSuccess(userInfo){localStorage.setItem('accountId',userInfo.accountId);if(accountIdUserName_shoppingCart_popup){accountIdUserName_shoppingCart_popup.textContent=userInfo.accountId}}});
