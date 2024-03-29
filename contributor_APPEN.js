// ==UserScript==
// @name         Contibutor APPEN
// @namespace    http://tampermonkey.net/
// @version      3.6
// @description  try to take over the world!
// @author       Multiples colaboradores
// @match        https://annotate.appen.com/*
// @match        https://account.appen.com/*
// @match        https://account.appen.com/dashboard*
// @match        https://view.appen.io/channels/feca/tasks/
// @match        https://view.appen.io/assignments/*
// @match        https://identity.appen.com/auth/*
// @updateURL    https://gitlab.com/carlosmundaray/scriptforjunior/raw/master/ContributorTaskNotifier.user.js
// @resource     bootstrap https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css
// @resource     dataTable https://cdn.datatables.net/1.10.18/css/dataTables.bootstrap4.min.css
// @require      https://code.jquery.com/jquery-3.4.1.min.js
// @require      https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js
// @require      https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js
// @require      https://cdn.jsdelivr.net/npm/bootbox@5.3.2/bootbox.all.min.js
// @require      https://cdn.datatables.net/1.10.18/js/jquery.dataTables.min.js
// @require      https://cdn.datatables.net/1.10.18/js/dataTables.bootstrap4.min.js
// @require      https://cdn.jsdelivr.net/npm/js-cookie@2/src/js.cookie.min.js
// @require      https://cdnjs.cloudflare.com/ajax/libs/moment.js/2.24.0/moment-with-locales.min.js
// @grant        GM_xmlhttpRequest
// @grant        GM_addStyle
// @grant        GM_getResourceText
// @grant        GM_getValue
// @grant        GM_setValue
// @grant        GM_deleteValue
// @grant        GM_openInTab
// @grant        GM_notification
// @grant        window.close
// @connect      feca-proxy.appen.com
// @connect      account.appen.com
// @connect      view.appen.io
// ==/UserScript==

if(window.location.href.includes('jazakk')){

    var redireccion="https://annotate.appen.com/jazakk";

    var contributor_url = "https://annotate.appen.com/";

    var FECA_PROXY_URL="https://feca-proxy.appen.com";

    var task_url = "https://account.appen.com/";

    var continue_task_search=true;

    var is_open_task = false;

    var reset_time = 1000;

    var login_portal_try=0;

    var num_max_intentos=3;

    var wait_for_try=5000;

    var msj_top = '<div class="alert alert_campos_blanco d-none alert-warning alert-dismissible mt-3"> Por favor configura tu usuario y contraseÃ±a correctamente y verifica si inician sesiÃ³n.</div> <div class="alert alert_contributor d-none alert-warning alert-dismissible mt-3"> Ocurrio un problema al intentar iniciar sesiÃ³n automaticamente en <strong><a target="_blank" href="https://annotate.appen.com">https://annotate.appen.com!</a></strong> Usuario Ã³ contraseÃ±a incorrectas.</div><div class="alert alert_task d-none alert-warning alert-dismissible mt-3"> Ocurrio un problema al intentar iniciar sesiÃ³n automaticamente en <strong><a target="_blank" href="https://account.appen.com">https://account.appen.com!</a></strong> las credenciales no estÃ¡n definidas.</div>';

    var btns_top='<div id="menuWrapper" class="text-center"><div class="row justify-content-center"><div class="col-sm-12 pt-2 bg-dark mb-2"><div class="row justify-content-center mb-2"> <div class="col-sm-3 p-0 text-left"><strong style="color:#fff;padding-left: 15px;">Worker ID: <span class="Worker_id">435435</span></strong> <strong style="color:#fff;padding-left: 15px;">Saldo: <span class="payments_summary">0</span> AC: <span><input id="autoclose" type="checkbox" value="true" /></span></strong></div><div class="col-sm-1 p-0 text-right"><span class="badge badge-primary contador_loggin">0</span></div><div class="col-sm-3"> <input type="text" class="font-weight-bold form-control email_acc" placeholder="Email" name=""> </div><div class="col-sm-2"> <input type="password" class="font-weight-bold form-control pass_acc" placeholder="Password" name=""> </div><div class="col-sm-1"> <button id="show_pass" class="btn btn-primary w-100">Show</button> </div><div class="col-sm-2"> <button id="save_acc_data" class="btn btn-success w-100">Save</button> </div></div></div><div class="col-sm-12 text-center"><button id="blockListButton" class="btn btn-md btn-danger mr-1">Block List</button><button id="includeListButton" class="btn btn-md btn-primary mr-1">Include List</button><button id="settingsButton" class="btn btn-md btn-primary">Settings</button></div></div></div>';

    var panel_ajustes='<div class="row"><div class="col"><label>Discord username</label><input type="text" class="form-control" id="discordUsername" placeholder="Enter username"></div><div class="col"><label>Zoom</label><input type="range" class="form-control" id="zoom" placeholder="Enter zoom value" min="0" max="2" step="0.1"></div></div><div class="row"><div class="col-sm-12"><label>Session token</label><input type="text" class="form-control" id="jwtoken" placeholder="Paste token"><label>Tiempo de auto-cerrado</label><input type="text" class="form-control" id="timeautoclosed" placeholder="Ingrese el tiempo"></div></div><div class="row mt-4"><div class="col"><div class="form-group row form-check-inline ml-1"><input type="checkbox" class="form-check-input" id="newTaskSoundCheck"><label class="form-check-label" for="newTaskSoundCheck">New Task Sound</label></div><div class="form-group row form-check ml-1"><input type="checkbox" class="form-check-input" id="taskFoundSoundCheck"><label class="form-check-label" for="taskFoundSoundCheck">Task Found Sound</label></div><div class="form-group row form-check ml-1"><input type="checkbox" class="form-check-input" id="openTabsInBackground"><label class="form-check-label" for="openTabsInBackground">Open tabs in background</label></div></div><div class="col"><div class="form-group row form-check-inline ml-1"><input type="checkbox" class="form-check-input" id="enableToolTips"><label class="form-check-label" for="enableToolTips">Enable ToolTips</label></div><div class="form-group row form-check ml-1"><input type="checkbox" class="form-check-input" id="min_text_t"><label class="form-check-label" for="min_text_t">Min text Tables</label></div></div></div>';

    var caja_tareas_busqueda='<div id="jobCatcherWrapper" class="card d-inline-block w-100 mt-4 bg-dark"><div class="card-head ml-1 mt-1 mb-1"><div class="alert alert-secondary request_task_list" style="display: inline-block;padding-top: .3rem;top: .06rem;background-color:#f8f9fa;border-color:#f8f9fa; height: 38px;margin: 0px;" role="alert">Task list request status: <span class="badge badge-primary animated flash requesting"></span><span class="px-2">Success: <span class="badge badge-success request_success">0</span></span>|<span class="px-2">Timeout: <span class="badge badge-secondary request_timeout">0</span></span> | <span class="px-2">Request error: <span class="badge badge-dark request_error">0</span></span> |<span class="px-2">Login error: <span class="badge badge-danger login_error">0</span></span>|<span class="px-2">Unknown error:  <span class="badge badge-warning un_error">0</span></span> </div></div> <div class="card-body p-0"></div> </div>';

    var buscador_tarea=' <div id="jobCard" class="mx-1 mb-1 p-1 card d-inline-block mt-1 text-center" style="width:260px"> <div class="card-head bg-secondary"> <button id="collectBtn" data-toggle="button" type="button" class="btn btn-outline-success w-100">Collect <span class="count"></span>/<span class="reset"></span></button> </div><div class="mb-1 card-body p-0 overflow-hidden" style="height:6em; line-height: 1.5em"> <h5 class="mt-2" style="font-size: 1rem;" id="jobTitle"> <b><span></span></b> <br><a href="#" target="_blank" style="text-decoration: none; color:#121416;" ></a> </h5> </div><div class="btn-group-toggle float-left" data-toggle="buttons"> <label class="btn btn-outline-warning p-1 active" data-toggle="tooltip" title="Collect On Close"> <input id="collectOnClose"type="checkbox" checked autocomplete="off"> Coc</label> </div><button id="deleteBtn" class="btn btn-danger float-right d-inline-block">X</button><span class="badge badge-primary badge-pill animated_job flash status_job request_job" data-toggle="tooltip" title="Request status"></span><span class="badge badge-secondary badge-pill status_job request_timeout" data-toggle="tooltip" title="Request timeout">0</span><span class="badge badge-dark badge-pill status_job request_error" data-toggle="tooltip" title="Request error">0</span><span class="badge badge-danger badge-pill status_job request_login_error" data-toggle="tooltip" title="Status code 404: login error">0</span><span class="badge badge-info badge-pill status_job request_server_error" data-toggle="tooltip" title="Status code 500: server error">0</span><span class="badge badge-warning badge-pill status_job request_un_error" data-toggle="tooltip" title="Unknown error">0</span> <div class="counts"> <span> Search: <span class="badge badge-success badge-pill" id="SearchCount"></span></span><span id="separator"> | </span><span class="text-left">Found: <b><span id="FoundCount"></span></b></span></div></div>';
    function time_random(min, max) {
        return Math.round(Math.random() * (max - min + 1) + min);
    }

    function aumentar_contador(element){
        let ele=document.querySelector(element);
        let value=ele.textContent;
        ele.textContent=parseInt(value)+1;
    }

    function remover_request_job(buscador){
        buscador.querySelector('.request_job').textContent="";
    }

    function aumentar_contador_job(campo){
        let value=campo.textContent;
        campo.textContent=parseInt(value)+1;
    }

    function consultar_tareas(){
        let email=Cookies.get('autologinUsername')||null;
        let pass=Cookies.get('autologinPassword')||null;

        if(email == null || pass == null){
            document.querySelector(".alert_campos_blanco").classList.remove("d-none");
        }else{
            setTimeout(function start_search(){
                if(continue_task_search){
                    GM_xmlhttpRequest({
                        'method':'GET',
                        'url':FECA_PROXY_URL+'/v1/tasks/iframe_url',
                        'responseType':'json',
                        'timeout':10000,
                        'onload':function(resp){
                            if(resp.status===429){
                                setTimeout(start_search,time_random(250000,300000));
                                aumentar_contador(".request_timeout");
                              }
                            else if(resp.status==200){
                                GM_xmlhttpRequest({
                                    'method':'GET',
                                    'url':resp.response.url,
                                    'timeout':10000,
                                    'onload':function(response){
                                        if(response.status==200){
                                            setTimeout(start_search,time_random(100000,150000));
                                            aumentar_contador(".request_success");
                                            var data_tareas=JSON.parse($(response.responseText).find('#task-listing-datatable').attr('data-tasks'));
                                            var tareas_filtradas=filtrar_block(data_tareas);
                                            var is_in_prev_task=false;
                                            //aqui selecciono cada uno de los indices de los elementos de la tarea correspondientes a sus datos
                                            tareas_filtradas.forEach(task=>{
                                                var tarea_id=task[0];//0 id
                                                var tarea_nombre=task[1];//1 nombre
                                                var tarea_nivel=task[2];//11 nivel, pero el nivel es el 2
                                                var tarea_pago=task[4];//4 tarea_pago
                                                var tarea_num=task[5];//5 numero de tareas
                                                var secret_key_get=task[12];//12 secrect get
                                                var link_tarea='https://account.appen.com/channels/feca/tasks/'+tarea_id+'?secret='+secret_key_get;
                                                var lista_incluidos=GM_getValue('includeList')||[{

                                                    task: "",
                                                    active: true
                                                }];

                                                lista_incluidos.forEach(elemts=>{
                                                    if(tarea_nombre.toLowerCase().includes(elemts.task.toLowerCase())){
                                                        if(!buscador_existe(tarea_id,link_tarea)){
                                                            if(elemts.active){
                                                                if(tarea_nombre.toLowerCase().includes("rate content of animated gifs")||
                                                                   tarea_nombre.toLowerCase().includes("f8 launch")||
                                                                   tarea_nombre.toLowerCase().includes("Adult Content")
                                                                  ){
                                                                     reset_time=50;
                                                                   }
                                                                else if(tarea_nombre.includes("Adult Content According")){
                                                                    reset_time=10;
                                                                }
                                                                else{
                                                                     reset_time=100000;
                                                                   }
                                                                if(tarea_id!=974846){
                                                                    crear_buscador(tarea_nombre,link_tarea,tarea_id,reset_time);
                                                                }
                                                            }
                                                        }else{
                                                            if(!elemts.active){
                                                                remover_buscador(tarea_id);
                                                            }
                                                        }
                                                    }
                                                });

                                            });
                                         //   setTimeout(start_search,8000);
                                        }else{
                                            aumentar_contador(".un_error");
                                            setTimeout(start_search,time_random(100000,150000));
                                        }
                                    }
                                    ,'onerror':function(resp){
                                        aumentar_contador(".request_error");
                                        setTimeout(start_search,time_random(10000,15000));

                                    }
                                    ,'ontimeout':function(resp){
                                        aumentar_contador(".request_timeout");
                                        setTimeout(start_search,time_random(100000,150000));
                                    }
                                });
                            }else if(resp.status===0 || resp.status===401){
                                aumentar_contador(".login_error");
                                ///ejecuta el login del portal
                                let portal_login = window.open("https://annotate.appen.com/logout");
                                setTimeout(function(){
                                portal_login.close(start_search());
                                },50000);
                            }else{
                                setTimeout(start_search,time_random(100000,150000));
                            }
                        }
                        ,'onerror':function(resp){
                            setTimeout(start_search,time_random(100000,150000));
                        }
                        ,'ontimeout':function(resp){
                            setTimeout(start_search,time_random(100000,150000));
                        }
                    });
                }else{
                    //detenemos toda ejecucion para evitar consumir recursos
                    let email=Cookies.get('autologinUsername')||null;
                    let pass=Cookies.get('autologinPassword')||null;
                    //yo las tomo de las mismas cookies y las vuelvo a crear
                    if(email == null || pass == null){
                        document.querySelector(".alert_task").classList.remove("d-none");
                    }else{
                        Cookies.set("autologinUsername",email,{'expires':365, path: '', domain: '.appen.com'});
                        Cookies.set("autologinPassword",pass,{'expires':365, path: '', domain: '.appen.com'});
                    }
                    let task_login=GM_openInTab(task_url,true);
                    task_login.onclose=function(){
                        continue_task_search=true;//no volveremos aca
                        setTimeout(start_search,time_random(100000,150000));
                        play_all();
                    };
                    //abrimos la ventana y esperamos que se inicie la sesion, los tiempos aca deben ser superior al del auto login
                    //yo voy a esperar de 20 a 22 segundos el auto login se ejecuta de 2 a 5 segundos
                    setTimeout(function(){
                        task_login.close();
                        //si por algun motivo no loguea no se cierra y se hace por si solo despues se vuelve a abrir.
                    },time_random(10000,12000));
                }
            },1000);
        }
    }
    function play_all(){
        let parent=document.querySelectorAll("#jobCard");
        if(parent.length>0){
            parent.forEach(jobs=>{
                if(!jobs.querySelector("#collectBtn").className.includes('active')){
                    jobs.querySelector("#collectBtn").click();
                }
            });
        }
    }
    function pause_all(){
        let parent=document.querySelectorAll("#jobCard");
        if(parent.length>0){
            parent.forEach(jobs=>{
                if(jobs.querySelector("#collectBtn").className.includes('active')){
                    jobs.querySelector("#collectBtn").click();
                }
            });
        }
    }

    function crear_elementos(){
        $('body').css({'zoom':'0.9','backgroundColor':'#454d55'});
        $('body').append(msj_top);
        $('body').append(btns_top);
        $('body').append(caja_tareas_busqueda);
        add_all_functions();
    }

    function add_all_functions(){
        add_functions_btn_top();
        add_fn_buscador_tareas();
    }

    function add_functions_btn_top(){
        $('#menuWrapper').on('click','button',function(event){
            var elemt_temp=event.target.id;
            switch(elemt_temp){
                case'blockListButton':fn_btn_block();
                    break;
                case'includeListButton':fn_btn_include();
                    break;
                case'settingsButton':fn_btn_ajustes();
                    break;
                case'save_acc_data':fn_btn_save_acc();
                    break;
                case'show_pass':fn_btn_show_pass();
                    break;
                default:
                    break;
            }
        });
    }
    function fn_btn_show_pass(){
        let pass=document.querySelector(".pass_acc");
        if(pass.type==='password'){
            pass.type="text";
        }else{
            pass.type="password";
        }
    }

    function fn_btn_save_acc(){
        let email=document.querySelector(".email_acc").value;
        let pass=document.querySelector(".pass_acc").value;

        if(email == "" || pass == ""){
            alert("Por favor agrega tus datos de email y contraseÃ±a correctamente.");
        }else{
            Cookies.set("autologinUsername",email,{'expires':365, path: '', domain: '.appen.com'});
            Cookies.set("autologinPassword",pass,{'expires':365, path: '', domain: '.appen.com'});
            alert("Por favor cierra tu sesiÃ³n en la pagina de https://account.appen.com/ y en la pagina de https://annotate.appen.com/ para verificar que el notificador inicia sesiÃ³n sin problemas, despues que lo hagas presiona aceptar, si ya esta hecho presiona aceptar.");
            window.location.reload();
        }
    }

    function cargar_datos_login(){
        document.querySelector(".email_acc").value=Cookies.get('autologinUsername')||null;
        document.querySelector(".pass_acc").value=Cookies.get('autologinPassword')||null;
    }

    function check_payments_summary(){
        let line=document.querySelector(".payments_summary");
        line.innerHTML="cargado";
        GM_xmlhttpRequest({
            'method':'GET',
            'url':FECA_PROXY_URL+"/v1/users/payments_summary",
            'timeout':10000,
            'onload':function(response){
                if(response.status==200){
                    let json=JSON.parse(response.responseText)||0;
                    line.innerHTML=(json.available / 100);
                }else{
                    line.innerHTML="error";
                }

            }
            ,'onerror':function(resp){

            }
            ,'ontimeout':function(resp){
            }
        });
    }





    function check_worker_id(){
        let line=document.querySelector(".Worker_id");
        line.innerHTML="------";
        GM_xmlhttpRequest({
            'method':'GET',
            'url':FECA_PROXY_URL+"/v1/users/me",
            'timeout':10000,
            'onload':function(response){
                if(response.status==200){
                    let json=JSON.parse(response.responseText)||0;
                    line.innerHTML=json.id;
                }else{
                    line.innerHTML="Login error";
                }

            }
            ,'onerror':function(resp){


            }
            ,'ontimeout':function(resp){

            }
        });
    }

    function ejecutar_portal_login(){

                window.open("https://annotate.appen.com/logout");
    }

    function fn_btn_block(){
        var lista_block=GM_getValue('blockList')||[];
        var element_block=$('<div id="blockListButtonsWrapper" class="d-table w-100">');
        lista_block.forEach(iterator=>{
            element_block.append($('<button style="width: 24%; height: 30px" class="btn btn-sm btn-danger ml-1 my-1 il-btn blockList-btn" data-toggle="tooltip" title="'+iterator+'">'+iterator+'</button>'));
        });
        element_block.on('click','button',function(evt){
            bootbox.confirm('Are you sure you want to delete this element?',function(e){
                if(e){
                    var lista_block=GM_getValue('blockList');
                    lista_block.splice(lista_block.indexOf(evt.target.innerText),1);
                    GM_setValue('blockList',lista_block);
                    modal_block.modal('hide');
                    $('#blockListButton').click();
                }else{
                    modal_block.modal('hide');
                    $('#blockListButton').click();
                }
            });
        });

        var modal_block=bootbox.dialog({
            'closeButton':false,
            'backdrop':true,
            'onEscape':function(){},
            'message':element_block,
            'title':'Block List',
            'size':'large',
            'buttons':{
                'deleteAll':{
                    'label':'Delete All',
                    'className':'btn-danger',
                    'callback':function(){
                        bootbox.confirm('Are you sure?',function(event){
                            if(event){
                                GM_deleteValue('blockList');
                                modal_block.modal('hide');
                                $('#blockListButton').click();
                            }else{
                                modal_block.modal('hide');
                                $('#blockListButton').click();
                            }
                        });
                    }
                },
                'add':{
                    'label':'Add',
                    'className':'btn-primary',
                    'callback':function(){
                        var input_add_block=$('<div class="form-group"><label for="inputMatch">Match</label> <input type="text" class="form-control" id="inputMatch" placeholder="Enter match pattern" required> </div> </form>');
                        bootbox.dialog({
                            'closeButton':false,
                            'title':'Add block list item',
                            'message':input_add_block,
                            'size':'small',
                            'onEscape':function(){},
                            'backdrop':true,
                            'buttons':{
                                'save':{
                                    'label':'Save',
                                    'className':'btn-primary',
                                    'callback':function(){
                                        var new_block=input_add_block.find('#inputMatch').val();
                                        lista_block.push(new_block);
                                        GM_setValue('blockList',lista_block);
                                        modal_block.modal('hide');
                                        $('#blockListButton').click();
                                    }
                                }
                            }
                        });
                        return false;
                    }
                }
            }
        });
    }

    function recortar_texto(texto,max=23){
        let val="";
        if(texto.length>max){
            val=texto.slice(0,max);
        }else{
            val=texto;
        }
        return val;
    }
    function min_text(name,max=15){
        if(GM_getValue('min_text_t')){
            return recortar_texto(name,max);
        }else{
            return name;
        }
    }

    function get_current_date_server(){
        /*let last_sync=GM_getValue('last_sync')||null;
        if(last_sync!=null){
            GM_xmlhttpRequest({
                method: "GET",
                url: base_url+"/current_time",
                headers:    {
                    Authorization: "Bearer " + GM_getValue('jwtoken')||"",
                    "Content-Type": "application/json",
                    "Accept": "application/json"
                },
                onload: function(res) {
                    let json=JSON.parse(res.responseText);
                    last_sync=json.current_time;
                    GM_setValue('last_sync',last_sync);
                },
                onerror:function(resp){
                },
                ontimeout:function(resp){
                }
            });
        }*/
    }

    function fn_btn_include(){
        var include_list=GM_getValue('includeList')||[];
        let element_include=document.createElement("div");
        element_include.setAttribute("id","includeListButtonsWrapper");
        element_include.classList.add("w-100","row");

        include_list.forEach(function(iterator,indice){
            let texto=recortar_texto(iterator.task);

            let container_link=document.createElement("div");
            container_link.classList.add("col-lg-4","my-1");

            let check_link=document.createElement("input");
            check_link.setAttribute("type","checkbox");
            check_link.style.transform="scale(1.7)";
            check_link.dataset.indice=indice;

            if(iterator.active){
                check_link.setAttribute("checked","checked");
            }
            let link=document.createElement("a");
            link.classList.add("text-dark","btn_remove");
            link.setAttribute("href","javascript:void(0)");
            link.setAttribute("title",iterator.task);
            link.dataset.toggle="tooltip";
            link.dataset.title=iterator.task;
            link.dataset.indice=indice;
            link.style.fontWeight="bold";
            link.style.marginLeft="7px";
            link.innerHTML=texto;

            container_link.appendChild(check_link);
            container_link.appendChild(link);
            element_include.append(container_link);
        });

        element_include.addEventListener('click',function(evnt){
            if(evnt.target.type==="checkbox"){
                include_list[evnt.target.dataset.indice].active=evnt.target.checked;
                GM_setValue('includeList',include_list);
                get_current_date_server();
            }else if(evnt.target.dataset.indice!==undefined){
                bootbox.confirm('Are you sure you want to delete <b>"'+evnt.target.dataset.title+'"</b> ?',function(e){
                    if(e){
                        var include_list=GM_getValue('includeList');
                        include_list.splice(evnt.target.dataset.indice,1);
                        GM_setValue('includeList',include_list);
                        modal_include.modal('hide');
                        $('#includeListButton').click();
                        get_current_date_server();
                    }
                });
            }
        });
        var modal_include=bootbox.dialog({
            'closeButton':false,
            'backdrop':true,
            'onEscape':function(){},
            'message':element_include,
            'title':'Include List',
            'size':'large',
            'buttons':{
                'sync':{
                    'label':'Sync',
                    'className':'btn-primary',
                    'callback':function(){
                        bootbox.confirm('Are you sure?',function(event){
                            if(event){
                                let modal_bar_progress=bootbox.dialog({
                                    'closeButton':false,
                                    'title':'Wait one moment',
                                    'message':'<div class="progress"><div class="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100" style="width: 100%"></div></div>',
                                    'onEscape':function(){return false},
                                    'backdrop':true,
                                });
                                setTimeout(function(){
                                    GM_xmlhttpRequest({
                                        'method':'GET',
                                        'url':FECA_PROXY_URL+"/v1/users/me",
                                        'timeout':10000,
                                        'onload':function(response){
                                            if(response.status==200){
                                                let json=JSON.parse(response.responseText)||0;
                                                var send_data = new FormData();
                                                send_data.append("worker_id",json.id||null);
                                                send_data.append("last_update",GM_getValue('last_sync')||null);
                                                send_data.append("include_list",JSON.stringify(include_list));
                                                /*GM_xmlhttpRequest({
                                                    method: "POST",
                                                    url: base_url+"/sync_includes",
                                                    data:send_data,
                                                    headers:    {
                                                        Authorization: "Bearer " + GM_getValue('jwtoken')||"",
                                                    },
                                                    onload: function(res) {
                                                        console.log(res);
                                                        let json=JSON.parse(res.responseText);
                                                        if(json.status){
                                                            if(json.code==200 || json.code==202){
                                                                GM_setValue('last_sync',json.fecha);
                                                            }
                                                            if(json.code==202){
                                                                //actualizar la lista y darle la ultima fecha de sync
                                                                GM_setValue('includeList',(json.data));
                                                            }
                                                            modal_bar_progress.modal('hide');
                                                            $('#includeListButton').click();
                                                        }else{
                                                            if(json.code==500){
                                                                alert("Su token ha expirado.");
                                                            }else if(json.code==502){
                                                                alert("Este ID worker no estÃ¡ sincronizado con ninguna cuenta.");
                                                            }
                                                            modal_bar_progress.modal('hide');
                                                        }
                                                    },
                                                    onerror:function(resp){
                                                    },
                                                    ontimeout:function(resp){
                                                    }
                                                });*/
                                            }else{
                                                alert("Por favor inicia sesiÃ³n en tu cuenta portal");
                                                modal_bar_progress.modal('hide');
                                            }

                                        }
                                        ,'onerror':function(resp){


                                        }
                                        ,'ontimeout':function(resp){

                                        }
                                    });
                                },1000);
                            }else{
                                $('#includeListButton').click();
                            }
                        });
                    }
                },
                'deleteAll':{
                    'label':'Delete All',
                    'className':'btn-danger',
                    'callback':function(){
                        bootbox.confirm('Are you sure?',function(event){
                            if(event){
                                GM_deleteValue('includeList');
                                modal_include.modal('hide');
                                $('#includeListButton').click();
                                get_current_date_server();
                            }else{
                                modal_include.modal('hide');
                                $('#includeListButton').click();
                            }
                        });
                    }
                },
                'add':{
                    'label':'Add',
                    'className':'btn-primary',
                    'callback':function(){
                        var input_add_include=$('<div class="form-group"><label for="inputMatch">Match</label><input type="text" class="form-control" id="inputMatch" placeholder="Enter match pattern" required> </div> </form>');

                        bootbox.dialog({
                            'closeButton':false,
                            'title':'Add include list item',
                            'message':input_add_include,
                            'size':'small',
                            'onEscape':function(){},
                            'backdrop':true,
                            'buttons':{
                                'save':{
                                    'label':'Save',
                                    'className':'btn-primary',
                                    'callback':function(){
                                        var new_include=input_add_include.find('#inputMatch').val();
                                        include_list.push({ 'task': new_include , 'active' : true});
                                        GM_setValue('includeList',include_list);
                                        modal_include.modal('hide');
                                        $('#includeListButton').click();
                                        get_current_date_server();
                                    }
                                }
                            }
                        });
                        return false;
                    }
                }
            }
        });
        trigger_tooltip();
    }

    function fn_btn_ajustes(){
        var ajustes_elemt=$('<div id="settingsWrapper">'+panel_ajustes+'</div>');
        var username_discord=ajustes_elemt.find('#discordUsername')[0];
        var sound_new=ajustes_elemt.find('#newTaskSoundCheck')[0];
        var sound_found=ajustes_elemt.find('#taskFoundSoundCheck')[0];
        var open_tab_b=ajustes_elemt.find('#openTabsInBackground')[0];
        var zoom=ajustes_elemt.find('#zoom')[0];
        var enable_tooltips=ajustes_elemt.find('#enableToolTips')[0];
        var min_text_table=ajustes_elemt.find('#min_text_t')[0];
        var jwtoken=ajustes_elemt.find('#jwtoken')[0];
        var timeautoclosed=ajustes_elemt.find('#timeautoclosed')[0];

        username_discord.value=GM_getValue('discordUsername')||'';
        sound_new.checked=GM_getValue('newTaskSound');
        sound_found.checked=GM_getValue('taskFoundSound');
        open_tab_b.checked=GM_getValue('openTabBackground');
        zoom.value=GM_getValue('zoom')||'0.9';
        enable_tooltips.checked=GM_getValue('tooltips');
        min_text_table.checked=GM_getValue('min_text_t');
        jwtoken.value=GM_getValue('jwtoken')||'';
        timeautoclosed.value=GM_getValue('timeautoclosed')||'240000';


        bootbox.dialog({
            'closeButton':false,
            'backdrop':true,
            'onEscape':function(){},
            'message':ajustes_elemt,
            'title':'Settings',
            'size':'large',
            'buttons':{
                'reg_token':{
                    'label':'Reg. Token again',
                    'className':'btn-warning',
                    'callback':function(){
                        registrar_token(jwtoken.value);
                    }
                },
                'save':{
                    'label':'Save',
                    'className':'btn-primary',
                    'callback':function(){
                        var new_user_discord=username_discord.value;
                        var new_sound_new=sound_new.checked;
                        var new_sound_found=sound_found.checked;
                        var new_open_tab_b=open_tab_b.checked;
                        var new_tool_tip=enable_tooltips.checked;
                        var new_min_text_table=min_text_table.checked;
                        var new_zoom=zoom.value;
                        var new_jwtoken=jwtoken.value;
                        var new_timeautoclosed=timeautoclosed.value;

                        if(new_user_discord!==''){
                            GM_setValue('discordUsername',new_user_discord);
                        }
                        if(timeautoclosed!==''){
                            GM_setValue('timeautoclosed',new_timeautoclosed);
                        }
                        if(new_sound_new){
                            GM_setValue('newTaskSound',new_sound_new);
                        }else{
                            GM_deleteValue('newTaskSound');
                        }
                        if(new_sound_found){
                            GM_setValue('taskFoundSound',new_sound_found);
                        }else{
                            GM_deleteValue('taskFoundSound');
                        }
                        if(new_open_tab_b){
                            GM_setValue('openTabBackground',new_open_tab_b);
                        }else{
                            GM_deleteValue('openTabBackground');
                        }
                        if(new_min_text_table){
                            GM_setValue('min_text_t',new_min_text_table);
                        }else{
                            GM_deleteValue('min_text_t');
                        }

                        if(new_tool_tip){
                            GM_setValue('tooltips',new_tool_tip);
                            trigger_tooltip();
                        }else{
                            GM_deleteValue('tooltips');
                            let titles= document.querySelectorAll('[data-toggle="tooltip"]');
                            titles.forEach(key=>{
                                $(key).tooltip("dispose");
                                key.setAttribute('title',key.dataset.originalTitle);
                            });
                        }
                        if(new_zoom!==''){
                            GM_setValue('zoom',new_zoom);
                            document.body.style.zoom=new_zoom;
                        }

                        let token_viejo=GM_getValue('jwtoken')||null;
                        if(new_jwtoken !=''){
                            if(new_jwtoken!=token_viejo){
                                //aqui se registra solo si es diferente al guardado
                                registrar_token(new_jwtoken);
                            }
                        }
                        //al final lo guarda
                        GM_setValue('jwtoken',new_jwtoken);
                    }
                }
            }
        });
    }

    function registrar_token(token){
        GM_xmlhttpRequest({
            'method':'GET',
            'url':"https://feca-proxy.appen.com/v1/users/me",
            'timeout':10000,
            'onload':function(response){
                if(response.status==200){
                    let json=JSON.parse(response.responseText)||0;
                    GM_setValue('jwtoken',token);
                    window.location="https://view.appen.io/assignments/g/?jwtoken="+token+"&id="+json.id+"&redirecion="+redireccion;
                }else{
                    alert("Por favor inicia sesiÃ³n en cuenta portal y vuelva a intentarlo.");
                }
            }
            ,'onerror':function(resp){
            }
            ,'ontimeout':function(resp){
            }
        });
    }

    function crear_buscador(tarea_nombre,tarea_link,tarea_id,reset_time2){
        var buscador_temp=$(buscador_tarea).clone();
        $(buscador_temp).addClass("jobCard_"+tarea_id);
        $(buscador_temp).find('#jobTitle span').text("["+tarea_id+"]");
        $(buscador_temp).find('#jobTitle a').text(tarea_nombre);
        $(buscador_temp).find('#jobTitle a').attr('href',tarea_link);
        $(buscador_temp).find('#collectBtn').attr('data-href',tarea_link);
        $(buscador_temp).find('#collectBtn')[0].dataset.id=tarea_id;
        $(buscador_temp).find('#deleteBtn')[0].dataset.id=tarea_id;
        $(buscador_temp).appendTo('#jobCatcherWrapper');
        $(buscador_temp).find('#collectBtn .count').text(parseInt(0));
        $(buscador_temp).find('#collectBtn .reset').text(parseInt(reset_time2));
        $(buscador_temp).find('#collectBtn').click();
        trigger_tooltip();
    }

    function remover_buscador(id_tarea){
        var element=document.querySelector(".jobCard_"+id_tarea);
        element.querySelector("#collectBtn").classList.remove('active');
        element.remove();
    }

    function buscador_existe(id_tarea,url){
        var element=document.querySelector(".jobCard_"+id_tarea);
        if(element!=null){
            element.querySelector(".count").innerText=parseInt(0);
            element.querySelector('#jobTitle a').setAttribute('href',url);
            element.querySelector('#collectBtn').setAttribute('data-href',url);
            return true;
        }
        return false;
    }

    function add_fn_buscador_tareas(){
        $('#jobCatcherWrapper').on('click','button',function(event){
            var element=event.target;
            if(element.id==='pauseAll'){
                pause_all();
            }else if(element.id==='startAll'){
                play_all();

            }else if(element.id==='deleteBtn'){
                //es mejor que usar parent parent
                remover_buscador(element.dataset.id);
            }else if(element.id==='collectBtn'){
                if(!element.className.includes('active')){
                    action_for_collect(500,$(element).closest('#jobCard'),element.dataset.id);
                }
            }
        });
    }

    function action_for_collect(time,buscador_tarea,id_tarea){
        var con_busq=buscador_tarea[0].querySelector('#SearchCount');
        var con_found=buscador_tarea[0].querySelector('#FoundCount');
        var btn_collect=buscador_tarea[0].querySelector('#collectBtn');
        var body_task=buscador_tarea[0].querySelector('.card-body');
        var btn_coc_close=buscador_tarea[0].querySelector('#collectOnClose');

        var count_res=buscador_tarea[0].querySelector('#collectBtn .count');
        var reset_time=buscador_tarea[0].querySelector('#collectBtn .reset');
        count_res.innerText=parseInt(0);
        var url=null;

        setTimeout(function start(){
            url=buscador_tarea[0].querySelector('#collectBtn').getAttribute('data-href');
            con_busq.innerText=parseInt(con_busq.innerText)+1||1;

            if(con_busq.innerText=="3"){
                //si se cumplio el tiempo paramos de buscar
                remover_buscador(id_tarea);

     }else{ setTimeout(function(){
                ventana_tempp.close(start());
                },300000);

           var ventana_tempp=window.open(url);
            setTimeout(function(){
                //remover_buscador(id_tarea)
            },8000);
            }
        });
    }

    function filtrar_block(tareas){
    var lista_block=GM_getValue('blockList')||[
        "Investigating Factors That Play A Role In The Interaction Between Manually Driven And Autom"
        "Judge Whether Sentences",
        "Matching Synthetic Voices",
        "Matching Synthetic Voices To Faces For A Virtual Agent (W1p2 A1c2)",
        "Find Topics In Review",
        "Evaluating Synthetic Voices",
        "Determine Stances In Reddit Debates 2",
        "Website Lists Of Companies Confirmation Assistance",
        "Rate The Image",
        "Judge The Sentiment Of Youtube Comment",
        "Extract Amazon",
        "Box People And Signs In An Image",
        "Format 4 -",
        "Business Relationships Research",
        "Supplier Locations",
        "Box And Transcribe Text In An Image",
        "Document Recognition And Translations (Cf Redesign)",
        "Unit Of Measure Annotation",
        "Production- External M&A External Event Detection - High Quality",
        "Object/Keyword Identification & Image Style For Ads",
        "Keyword Identification & Image Style For Ads",
        "What Product Information Is Most Important To Your Buying Decision For Storage Sheds?",
        "Is This A Sponsored",
        "Image Description And Relevant Words",
        "Quick & Easy- Caulk Video Survey",
        "Annotate And Categorize Objects In An Image Using A Bounding Box",
        "Outline Objects In Images With Polygons",
        "Pick The Most Similar Company",
        "Identify The Bill Of Lading Number (Cf Revision)",
        "Google Search For Employee Name, Job Title And Linkedin Url Collection Assistance",
        "Detecting Student Engagement In Online Classes",
        "Welcome To Appen",
        "Rate Ai Responses According To Their Quality",
        "Interior Lighting Video And Image Customer Preference | Audio Required",
        "The Henry Company Image Impact Survey",
        "Cordless Power Equipment",
        "Quick & Easy Image Survey - Portable Power Accessories (Ranking Images)",
        "Model Response Comparison - V40 (A/B/Neither Only Eval)",
        "Model Response Comparison - V40 (A/B/Neither Only Eval)",
        "Banner Quality Test",
        "Rationale Correction",
        "Cabinet Knob Image Survey",
        "Cabinet Pull Image Survey",
        "Market Research Job",
        "Find The Official Website Of Businesses - 2021-10-05",
        "Uk_search-Science",
        "2Fa Ops Overhaul"
    ];
        lista_block.forEach(key=>{
            tareas=tareas.filter(key_filter=>{
                if(key_filter[1].toLowerCase().includes(key.toLowerCase())){
                }
                return!key_filter[1].toLowerCase().includes(key.toLowerCase());
            });
        });

        var cook_data=Cookies.get();
        for(var iterator in cook_data){
            tareas=tareas.filter(filter_key=>{
                return!filter_key[1].toLowerCase().includes(iterator.toLowerCase());
            });
        }

        return tareas;
    }

    function trigger_tooltip(){
        if(GM_getValue('tooltips')){
            $('[data-toggle="tooltip"]').tooltip();
        }
    }

    setInterval(function autoclose(){
         $('#autoclose').click(function(){
            if($(this).is(":checked")){
                GM_setValue('autoclose',true);
            }
        });

        $("#autoclose").prop('checked', GM_getValue('autoclose'));

        if (GM_getValue('autoclose')){
             setTimeout(function(){
                 location.reload();
             GM_setValue('autoclose',false);
             },3000);
        }
    },2000);

    (function(){
        'use strict';

        //obtenemos los recuersos del css
        var bootstrap_css=GM_getResourceText('bootstrap');
        var datatable_css=GM_getResourceText('dataTable');
        //removemos los originales de la pagina de contribution
        $('style').remove();

        //aÃ±adimos los recuersos css
        GM_addStyle(datatable_css);
        GM_addStyle(bootstrap_css);
        GM_addStyle(".modal-backdrop {width: 100%; height: 100%;}");
        GM_addStyle(".animated{-webkit-animation-duration:10s;animation-duration:10s;-webkit-animation-fill-mode:both;animation-fill-mode:both}@-webkit-keyframes flash{0%,90%{background-color:#28a745}100%{background-color:#dc3545}}@keyframes flash{0%,10%,20%,30%,40%,50%,60%,70%,80%,90%{background-color:#007bff}15%,25%,35%,45%,5%,55%,65%,75%,85%{background-color:#007bffab}100%{background-color:#6c757d}}.flash{-webkit-animation-name:flash;animation-name:flash}.animated_job{-webkit-animation-duration:15s;animation-duration:15s;-webkit-animation-fill-mode:both;animation-fill-mode:both}.animated:after{content:'';position:relative;margin-left:.2rem;animation-name:time;animation-duration:10s;-webkit-animation-name:time;-webkit-animation-duration:10s}@keyframes time{0%{content:''}10%{content:'(1)'}20%{content:'(2)'}30%{content:'(3)'}40%{content:'(4)'}50%{content:'(5)'}60%{content:'(6)'}70%{content:'(7)'}80%{content:'(8)'}90%{content:'(9)'}100%{content:'(10)'}}@-webkit-keyframes time{0%{content:''}10%{content:'(1)'}20%{content:'(2)'}30%{content:'(3)'}40%{content:'(4)'}50%{content:'(5)'}60%{content:'(6)'}70%{content:'(7)'}80%{content:'(8)'}90%{content:'(9)'}100%{content:'(10)'}}.animated_job:after{content:'R';position:relative;animation-name:time_job;animation-duration:15s;-webkit-animation-name:time_job;-webkit-animation-duration:15s}@keyframes time_job{0%{content:'R'}6.6%{content:'1'}13.2%{content:'2'}19.8%{content:'3'}26.4%{content:'4'}33%{content:'5'}39.6%{content:'6'}46.2%{content:'7'}52.8%{content:'8'}59.4%{content:'9'}66%{content:'10'}72.6%{content:'11'}79.2%{content:'12'}85.8%{content:'13'}92.4%{content:'14'}100%{content:'15'}}@-webkit-keyframes time_job{0%{content:'R'}6.6%{content:'1'}13.2%{content:'2'}19.8%{content:'3'}26.4%{content:'4'}33%{content:'5'}39.6%{content:'6'}46.2%{content:'7'}52.8%{content:'8'}59.4%{content:'9'}66%{content:'10'}72.6%{content:'11'}79.2%{content:'12'}85.8%{content:'13'}92.4%{content:'14'}100%{content:'15'}}.requesting{width:100px}.counts{line-height:.7rem;font-size:.79rem}.status_job{cursor: pointer;font-size:.6rem;min-width: 1.2rem;margin-left:.3rem}");
        document.body.classList.add("container-fluid");
        //creamos los elementos html de botones,contenedores y tablas
        crear_elementos();
        cargar_datos_login();
        check_worker_id();
        check_payments_summary();
        setInterval(check_payments_summary,200000);
        setInterval(check_worker_id,200000);
        //ejecutamos el hilo principal de las tareas
        consultar_tareas();

    }());
setTimeout(function(){
setTimeout(function(){
setTimeout(function(){
var title = document.title;
var reload = title.toString();

if (reload.includes("Appen_Online9")){
   // location.reload();
}
}, 1000);
}, 1000);
}, 50000);


}else if(window.location.href.includes('secret')){

//    window.close();

}else if(window.location.href.includes('auth')){

setTimeout(function(){
window.location="https://annotate.appen.com";
},20000);

var title = document.title;
var reload = title.toString();

if (reload.includes("Log in to Appen Connect")){
    document.getElementById('username').value=Cookies.get('autologinUsername');
    document.getElementById('password').value=Cookies.get('autologinPassword');
    document.getElementById('kc-login').removeAttribute('disabled');
    //no hacer nada
}else{
    setInterval(function(){ClikLogin();}, 1000);
    function ClikLogin(){
    document.getElementById('username').value=Cookies.get('autologinUsername');
    document.getElementById('password').value=Cookies.get('autologinPassword');
    document.getElementById('kc-login').removeAttribute('disabled');
    document.getElementById('kc-login').click();
    }}
}else if(window.location.href.includes('view')){
setTimeout(Given_Up,1000);
    function Given_Up(){
var titleDivapp = document.createElement("div");
    var titleapp = document.querySelector(".content").innerText;
    titleDivapp.innerHTML = titleapp;
    var jobTitle = titleDivapp.innerText;

if(jobTitle.includes("Given Up")){

    window.close();
}}}
console.log("Evaluating Synthetic Voices");
