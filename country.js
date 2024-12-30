
function changeCountry(s1,s2,s3,s4){
			     var s1 = document.getElementById(s1);
				 var s2 = document.getElementById(s2);
				 var s3 = document.getElementById(s3);
				 var s4 = document.getElementById(s4);

				 _("regphone").value = "";
				 _("regstateinput").value = "";
				 _("regaddress").value = "";
				 
			     s2.innerHTML = "";
			     s3.innerHTML = "";
				 
				 if(s1.value == "NG"){
					 $('.regstate1').removeClass('hide');
				     $('.regstate2').addClass('hide');
				     $('.regstate2').removeClass('show');				     
				     $('.regstate1').addClass('show');
				 }else{
					 $('.regstate2').removeClass('hide');
					 $('.regstate1').addClass('hide');
				     $('.regstate1').removeClass('show');				     
				     $('.regstate2').addClass('show');
				 }
				 
				     if(s1.value == "AF"){
				     var optionPhoneArray = ["93|93"]
				     } 
				     else if(s1.value == "AL"){
				     var optionPhoneArray = ["355|355"] 
				     }
				     else if(s1.value == "DZ"){
				     var optionPhoneArray = ["213|213"]
				     }
					 else if(s1.value == "AS"){
				     var optionPhoneArray = ["1|1"] 
				     }
				     else if(s1.value == "AD"){
				     var optionPhoneArray = ["376|376"]
				     }
					 else if(s1.value == "AO"){
				     var optionPhoneArray = ["244|244"] 
				     }
				     else if(s1.value == "AI"){
				     var optionPhoneArray = ["1|1"]
				     }
					 else if(s1.value == "AQ"){
				     var optionPhoneArray = ["672|672"] 
				     }
				     else if(s1.value == "AG"){
				     var optionPhoneArray = ["1|1"]
				     }
					 else if(s1.value == "AR"){
				     var optionPhoneArray = ["54|54"] 
				     }
				     else if(s1.value == "AM"){
				     var optionPhoneArray = ["374|374"]
				     }
					 else if(s1.value == "AW"){
				     var optionPhoneArray = ["297|297"] 
				     }
				     else if(s1.value == "AU"){
				     var optionPhoneArray = ["61|61"]
				     }
					 else if(s1.value == "AT"){
				     var optionPhoneArray = ["43|43"] 
				     }
					 else if(s1.value == "AX"){
				     var optionPhoneArray = ["358|358"] 
				     }
				     else if(s1.value == "AZ"){
				     var optionPhoneArray = ["994|994"]
				     }
					 else if(s1.value == "BS"){
				     var optionPhoneArray = ["1|1"] 
				     }
				     else if(s1.value == "BH"){
				     var optionPhoneArray = ["973|973"]
				     }
					 else if(s1.value == "BD"){
				     var optionPhoneArray = ["880|880"] 
				     }
				     else if(s1.value == "BB"){
				     var optionPhoneArray = ["1|1"]
				     }
					 else if(s1.value == "BY"){
				     var optionPhoneArray = ["375|375"] 
				     }
				     else if(s1.value == "BE"){
				     var optionPhoneArray = ["32|32"]
				     }
					 else if(s1.value == "BZ"){
				     var optionPhoneArray = ["501|501"] 
				     }
				     else if(s1.value == "BJ"){
				     var optionPhoneArray = ["229|229"]
				     }
					 else if(s1.value == "BM"){
				     var optionPhoneArray = ["1|1"] 
				     }
				     else if(s1.value == "BT"){
				     var optionPhoneArray = ["975|975"]
				     }
					 else if(s1.value == "BO"){
				     var optionPhoneArray = ["591|591"] 
				     }
				     else if(s1.value == "BA"){
				     var optionPhoneArray = ["387|387"]
				     }
					 else if(s1.value == "BW"){
				     var optionPhoneArray = ["267|267"] 
				     }
				     else if(s1.value == "BR"){
				     var optionPhoneArray = ["55|55"]
				     }
					 else if(s1.value == "IO"){
				     var optionPhoneArray = ["246|246"] 
				     }
				     else if(s1.value == "VG"){
				     var optionPhoneArray = ["1|1"]
				     }
					 else if(s1.value == "BN"){
				     var optionPhoneArray = ["673|673"] 
				     }
				     else if(s1.value == "BG"){
				     var optionPhoneArray = ["359|359"]
				     }
					 else if(s1.value == "BF"){
				     var optionPhoneArray = ["226|226"] 
				     }
				     else if(s1.value == "BI"){
				     var optionPhoneArray = ["257|257"]
				     }
					 else if(s1.value == "KH"){
				     var optionPhoneArray = ["855|855"] 
				     }
				     else if(s1.value == "CM"){
				     var optionPhoneArray = ["237|237"]
				     }
					 else if(s1.value == "CA"){
				     var optionPhoneArray = ["1|1"] 
				     }
				     else if(s1.value == "CV"){
				     var optionPhoneArray = ["238|238"]
				     }
					 else if(s1.value == "KY"){
				     var optionPhoneArray = ["1|1"] 
				     }
				     else if(s1.value == "CF"){
				     var optionPhoneArray = ["236|236"]
				     }
					 else if(s1.value == "TD"){
				     var optionPhoneArray = ["235|235"] 
				     }
				     else if(s1.value == "CL"){
				     var optionPhoneArray = ["56|56"]
				     }
					 else if(s1.value == "CN"){
				     var optionPhoneArray = ["86|86"] 
				     }
				     else if(s1.value == "CX"){
				     var optionPhoneArray = ["61|61"]
				     }
					 else if(s1.value == "CC"){
				     var optionPhoneArray = ["61|61"] 
				     }
				     else if(s1.value == "CO"){
				     var optionPhoneArray = ["57|57"]
				     }
					 else if(s1.value == "KM"){
				     var optionPhoneArray = ["269|269"] 
				     }
				     else if(s1.value == "CK"){
				     var optionPhoneArray = ["682|682"]
				     }
					 else if(s1.value == "CR"){
				     var optionPhoneArray = ["506|506"] 
				     }
				     else if(s1.value == "HR"){
				     var optionPhoneArray = ["385|385"]
				     }
					 else if(s1.value == "CU"){
				     var optionPhoneArray = ["53|53"] 
				     }
				     else if(s1.value == "CW"){
				     var optionPhoneArray = ["599|599"]
				     }
					 else if(s1.value == "CY"){
				     var optionPhoneArray = ["357|357"] 
				     }
				     else if(s1.value == "CZ"){
				     var optionPhoneArray = ["420|420"]
				     }
					 else if(s1.value == "CD"){
				     var optionPhoneArray = ["243|243"] 
				     }
				     else if(s1.value == "DK"){
				     var optionPhoneArray = ["45|45"]
				     }
					 else if(s1.value == "DJ"){
				     var optionPhoneArray = ["253|253"] 
				     }
				     else if(s1.value == "DM"){
				     var optionPhoneArray = ["1|1"]
				     }
					 else if(s1.value == "DO"){
				     var optionPhoneArray = ["1|1"] 
				     }
				     else if(s1.value == "TL"){
				     var optionPhoneArray = ["670|670"]
				     }
					 else if(s1.value == "EC"){
				     var optionPhoneArray = ["593|593"] 
				     }
				     else if(s1.value == "EG"){
				     var optionPhoneArray = ["20|20"]
				     }
					 else if(s1.value == "SV"){
				     var optionPhoneArray = ["503|503"] 
				     }
				     else if(s1.value == "GQ"){
				     var optionPhoneArray = ["240|240"]
				     }
					 else if(s1.value == "ER"){
				     var optionPhoneArray = ["291|291"] 
				     }
				     else if(s1.value == "EE"){
				     var optionPhoneArray = ["372|372"]
				     }
					 else if(s1.value == "ET"){
				     var optionPhoneArray = ["251|251"] 
				     }
				     else if(s1.value == "FK"){
				     var optionPhoneArray = ["500|500"]
				     }
					 else if(s1.value == "FO"){
				     var optionPhoneArray = ["298|298"] 
				     }
				     else if(s1.value == "FJ"){
				     var optionPhoneArray = ["679|679"]
				     }
					 else if(s1.value == "FI"){
				     var optionPhoneArray = ["358|358"] 
				     }
				     else if(s1.value == "FR"){
				     var optionPhoneArray = ["33|33"]
				     }
					 else if(s1.value == "PF"){
				     var optionPhoneArray = ["689|689"] 
				     }
				     else if(s1.value == "GA"){
				     var optionPhoneArray = ["241|241"]
				     }
					 else if(s1.value == "GM"){
				     var optionPhoneArray = ["220|220"] 
				     }
				     else if(s1.value == "GE"){
				     var optionPhoneArray = ["995|995"]
				     }
					 else if(s1.value == "DE"){
				     var optionPhoneArray = ["49|49"] 
				     }
				     else if(s1.value == "GH"){
				     var optionPhoneArray = ["233|233"]
				     }
					 else if(s1.value == "GI"){
				     var optionPhoneArray = ["350|350"] 
				     }
				     else if(s1.value == "GR"){
				     var optionPhoneArray = ["30|30"]
				     }
					 else if(s1.value == "GL"){
				     var optionPhoneArray = ["299|299"] 
				     }
				     else if(s1.value == "GD"){
				     var optionPhoneArray = ["1|1"]
				     }
					 else if(s1.value == "GU"){
				     var optionPhoneArray = ["1|1"] 
				     }
				     else if(s1.value == "GT"){
				     var optionPhoneArray = ["502|502"]
				     }
					 else if(s1.value == "GG"){
				     var optionPhoneArray = ["44|44"] 
				     }
				     else if(s1.value == "GN"){
				     var optionPhoneArray = ["224|224"]
				     }
					 else if(s1.value == "GW"){
				     var optionPhoneArray = ["245|245"] 
				     }
				     else if(s1.value == "GY"){
				     var optionPhoneArray = ["592|592"]
				     }
					 else if(s1.value == "HT"){
				     var optionPhoneArray = ["509|509"] 
				     }
				     else if(s1.value == "HN"){
				     var optionPhoneArray = ["504|504"]
				     }
					 else if(s1.value == "HK"){
				     var optionPhoneArray = ["852|852"] 
				     }
				     else if(s1.value == "HU"){
				     var optionPhoneArray = ["36|36"]
				     }
					 else if(s1.value == "IS"){
				     var optionPhoneArray = ["354|354"] 
				     }
				     else if(s1.value == "IN"){
				     var optionPhoneArray = ["91|91"]
				     }
					 else if(s1.value == "ID"){
				     var optionPhoneArray = ["62|62"] 
				     }
				     else if(s1.value == "IR"){
				     var optionPhoneArray = ["98|98"]
				     }
					 else if(s1.value == "IQ"){
				     var optionPhoneArray = ["964|964"] 
				     }
				     else if(s1.value == "IE"){
				     var optionPhoneArray = ["353|353"]
				     }
					 else if(s1.value == "IM"){
				     var optionPhoneArray = ["44|44"] 
				     }
				     else if(s1.value == "IL"){
				     var optionPhoneArray = ["972|972"]
				     }
					 else if(s1.value == "IT"){
				     var optionPhoneArray = ["39|39"] 
				     }
				     else if(s1.value == "CI"){
				     var optionPhoneArray = ["225|225"]
				     }
					 else if(s1.value == "JM"){
				     var optionPhoneArray = ["1|1"] 
				     }
				     else if(s1.value == "JP"){
				     var optionPhoneArray = ["81|81"]
				     }
					 else if(s1.value == "JE"){
				     var optionPhoneArray = ["44|44"] 
				     }
				     else if(s1.value == "JO"){
				     var optionPhoneArray = ["962|962"]
				     }
					 else if(s1.value == "KZ"){
				     var optionPhoneArray = ["7|7"] 
				     }
				     else if(s1.value == "KE"){
				     var optionPhoneArray = ["254|254"]
				     }
					 else if(s1.value == "KI"){
				     var optionPhoneArray = ["686|686"] 
				     }
				     else if(s1.value == "XK"){
				     var optionPhoneArray = ["383|383"]
				     }
					 else if(s1.value == "KW"){
				     var optionPhoneArray = ["965|965"] 
				     }
				     else if(s1.value == "KG"){
				     var optionPhoneArray = ["996|996"]
				     }
					 else if(s1.value == "LA"){
				     var optionPhoneArray = ["856|856"] 
				     }
				     else if(s1.value == "LV"){
				     var optionPhoneArray = ["371|371"]
				     }
					 else if(s1.value == "LB"){
				     var optionPhoneArray = ["961|961"] 
				     }
				     else if(s1.value == "LS"){
				     var optionPhoneArray = ["266|266"]
				     }
					 else if(s1.value == "LR"){
				     var optionPhoneArray = ["231|231"] 
				     }
				     else if(s1.value == "LY"){
				     var optionPhoneArray = ["218|218"]
				     }
					 else if(s1.value == "LI"){
				     var optionPhoneArray = ["423|423"] 
				     }
				     else if(s1.value == "LT"){
				     var optionPhoneArray = ["370|370"]
				     }
					 else if(s1.value == "LU"){
				     var optionPhoneArray = ["352|352"] 
				     }
				     else if(s1.value == "MO"){
				     var optionPhoneArray = ["853|853"]
				     }
					 else if(s1.value == "MK"){
				     var optionPhoneArray = ["389|389"] 
				     }
				     else if(s1.value == "MG"){
				     var optionPhoneArray = ["261|261"]
				     }
					 else if(s1.value == "MW"){
				     var optionPhoneArray = ["265|265"] 
				     }
				     else if(s1.value == "MY"){
				     var optionPhoneArray = ["60|60"]
				     }
					 else if(s1.value == "MV"){
				     var optionPhoneArray = ["960|960"] 
				     }
				     else if(s1.value == "ML"){
				     var optionPhoneArray = ["223|223"]
				     }
					 else if(s1.value == "MT"){
				     var optionPhoneArray = ["356|356"] 
				     }
				     else if(s1.value == "MH"){
				     var optionPhoneArray = ["692|692"]
				     }
					 else if(s1.value == "MR"){
				     var optionPhoneArray = ["222|222"] 
				     }
				     else if(s1.value == "MU"){
				     var optionPhoneArray = ["230|230"]
				     }
					 else if(s1.value == "YT"){
				     var optionPhoneArray = ["262|262"] 
				     }
				     else if(s1.value == "MX"){
				     var optionPhoneArray = ["52|52"]
				     }
					 else if(s1.value == "FM"){
				     var optionPhoneArray = ["691|691"] 
				     }
				     else if(s1.value == "MD"){
				     var optionPhoneArray = ["373|373"]
				     }
					 else if(s1.value == "MC"){
				     var optionPhoneArray = ["377|377"] 
				     }
				     else if(s1.value == "MN"){
				     var optionPhoneArray = ["976|976"]
				     }
					 else if(s1.value == "ME"){
				     var optionPhoneArray = ["382|382"] 
				     }
				     else if(s1.value == "MS"){
				     var optionPhoneArray = ["1|1"]
				     }
					 else if(s1.value == "MA"){
				     var optionPhoneArray = ["212|212"] 
				     }
				     else if(s1.value == "MZ"){
				     var optionPhoneArray = ["258|258"]
				     }
					 else if(s1.value == "MM"){
				     var optionPhoneArray = ["95|95"] 
				     }
				     else if(s1.value == "NA"){
				     var optionPhoneArray = ["264|264"]
				     }
					 else if(s1.value == "NR"){
				     var optionPhoneArray = ["674|674"] 
				     }
				     else if(s1.value == "NP"){
				     var optionPhoneArray = ["977|977"]
				     }
					 else if(s1.value == "NL"){
				     var optionPhoneArray = ["31|31"] 
				     }
				     else if(s1.value == "AN"){
				     var optionPhoneArray = ["599|599"]
				     }
					 else if(s1.value == "NC"){
				     var optionPhoneArray = ["687|687"] 
				     }
				     else if(s1.value == "NZ"){
				     var optionPhoneArray = ["64|64"]
				     }
					 else if(s1.value == "NI"){
				     var optionPhoneArray = ["505|505"] 
				     }
				     else if(s1.value == "NE"){
				     var optionPhoneArray = ["227|227"]
				     }
					 else if(s1.value == "NG"){	     
                     var optionPhoneArray = ["234|234"]	;					 
                     var optionStateArray = ["|Select State","AA|Abia","AB|Abuja","AD|Adamawa","AK|Akwa Ibom","AN|Anambra","BU|Bauchi","BY|Bayelsa","BE|Benue","BO|Borno","CR|Cross River","DE|Delta","EB|Ebonyi","ED|Edo","EK|Ekiti","EN|Enugu","GM|Gombe","IM|Imo","JG|Jigawa","KD|Kaduna","KN|Kano","KT|Katsina","KB|Kebbi","KG|Kogi","KW|Kwara","LA|Lagos","NS|Nasarawa","NG|Niger","OG|Ogun","ON|Ondo","OS|Osun","OY|Oyo","PL|Plateau","RV|Rivers","SK|Sokoto","TR|Taraba","YB|Yobe","ZM|Zamfara"]					 
				     }
				     else if(s1.value == "NU"){
				     var optionPhoneArray = ["683|683"]
				     }
					 else if(s1.value == "KP"){
				     var optionPhoneArray = ["850|850"] 
				     }
				     else if(s1.value == "MP"){
				     var optionPhoneArray = ["1670|1670"]
				     }
					 else if(s1.value == "NO"){
				     var optionPhoneArray = ["47|47"] 
				     }
				     else if(s1.value == "OM"){
				     var optionPhoneArray = ["968|968"]
				     }
					 else if(s1.value == "PK"){
				     var optionPhoneArray = ["92|92"] 
				     }
				     else if(s1.value == "PW"){
				     var optionPhoneArray = ["680|680"]
				     }
					 else if(s1.value == "PS"){
				     var optionPhoneArray = ["970|970"] 
				     }
				     else if(s1.value == "PA"){
				     var optionPhoneArray = ["507|507"]
				     }
					 else if(s1.value == "PG"){
				     var optionPhoneArray = ["675|675"] 
				     }
				     else if(s1.value == "PY"){
				     var optionPhoneArray = ["595|595"]
				     }
					 else if(s1.value == "PE"){
				     var optionPhoneArray = ["51|51"] 
				     }
				     else if(s1.value == "PH"){
				     var optionPhoneArray = ["63|63"]
				     }
					 else if(s1.value == "PN"){
				     var optionPhoneArray = ["64|64"] 
				     }
				     else if(s1.value == "PL"){
				     var optionPhoneArray = ["48|48"]
				     }
					 else if(s1.value == "PT"){
				     var optionPhoneArray = ["351|351"] 
				     }
				     else if(s1.value == "PR"){
				     var optionPhoneArray = ["1|1"]
				     }
					 else if(s1.value == "QA"){
				     var optionPhoneArray = ["974|974"] 
				     }
				     else if(s1.value == "CG"){
				     var optionPhoneArray = ["242|242"]
				     }
					 else if(s1.value == "RE"){
				     var optionPhoneArray = ["262|262"] 
				     }
				     else if(s1.value == "RO"){
				     var optionPhoneArray = ["40|40"]
				     }
					 else if(s1.value == "RU"){
				     var optionPhoneArray = ["7|7"] 
				     }
				     else if(s1.value == "RW"){
				     var optionPhoneArray = ["250|250"]
				     }
					 else if(s1.value == "BL"){
				     var optionPhoneArray = ["590|590"] 
				     }
				     else if(s1.value == "SH"){
				     var optionPhoneArray = ["290|290"]
				     }
					 else if(s1.value == "KN"){
				     var optionPhoneArray = ["1|1"] 
				     }
				     else if(s1.value == "LC"){
				     var optionPhoneArray = ["1|1"]
				     }
					 else if(s1.value == "MF"){
				     var optionPhoneArray = ["590|590"] 
				     }
				     else if(s1.value == "PM"){
				     var optionPhoneArray = ["508|508"]
				     }
					 else if(s1.value == "VC"){
				     var optionPhoneArray = ["1|1"] 
				     }
				     else if(s1.value == "WS"){
				     var optionPhoneArray = ["685|685"]
				     }
					 else if(s1.value == "SM"){
				     var optionPhoneArray = ["378|378"] 
				     }
				     else if(s1.value == "ST"){
				     var optionPhoneArray = ["239|239"]
				     }
					 else if(s1.value == "SA"){
				     var optionPhoneArray = ["966|966"] 
				     }
				     else if(s1.value == "SN"){
				     var optionPhoneArray = ["221|221"]
				     }
					 else if(s1.value == "RS"){
				     var optionPhoneArray = ["381|381"] 
				     }
				     else if(s1.value == "SC"){
				     var optionPhoneArray = ["248|248"]
				     }
					 else if(s1.value == "SL"){
				     var optionPhoneArray = ["232|232"] 
				     }
				     else if(s1.value == "SG"){
				     var optionPhoneArray = ["65|65"]
				     }
					 else if(s1.value == "SX"){
				     var optionPhoneArray = ["1|1"] 
				     }
				     else if(s1.value == "SK"){
				     var optionPhoneArray = ["421|421"]
				     }
					 else if(s1.value == "SI"){
				     var optionPhoneArray = ["386|386"] 
				     }
				     else if(s1.value == "SB"){
				     var optionPhoneArray = ["677|677"]
				     }
					 else if(s1.value == "SO"){
				     var optionPhoneArray = ["252|252"] 
				     }
				     else if(s1.value == "ZA"){
				     var optionPhoneArray = ["27|27"]
				     }
					 else if(s1.value == "KR"){
				     var optionPhoneArray = ["82|82"] 
				     }
				     else if(s1.value == "SS"){
				     var optionPhoneArray = ["211|211"]
				     }
					 else if(s1.value == "ES"){
				     var optionPhoneArray = ["34|34"] 
				     }
				     else if(s1.value == "LK"){
				     var optionPhoneArray = ["94|94"]
				     }
					 else if(s1.value == "SD"){
				     var optionPhoneArray = ["249|249"] 
				     }
				     else if(s1.value == "SR"){
				     var optionPhoneArray = ["597|597"]
				     }
					 else if(s1.value == "SJ"){
				     var optionPhoneArray = ["47|47"] 
				     }
				     else if(s1.value == "SZ"){
				     var optionPhoneArray = ["268|268"]
				     }
					 else if(s1.value == "SE"){
				     var optionPhoneArray = ["46|46"] 
				     }
				     else if(s1.value == "CH"){
				     var optionPhoneArray = ["41|41"]
				     }
					 else if(s1.value == "SY"){
				     var optionPhoneArray = ["963|963"] 
				     }
				     else if(s1.value == "TW"){
				     var optionPhoneArray = ["886|886"]
				     }
					 else if(s1.value == "TJ"){
				     var optionPhoneArray = ["992|992"] 
				     }
				     else if(s1.value == "TZ"){
				     var optionPhoneArray = ["255|255"]
				     }
					 else if(s1.value == "TH"){
				     var optionPhoneArray = ["66|66"] 
				     }
				     else if(s1.value == "TG"){
				     var optionPhoneArray = ["228|228"]
				     }
					 else if(s1.value == "TK"){
				     var optionPhoneArray = ["690|690"] 
				     }
				     else if(s1.value == "TO"){
				     var optionPhoneArray = ["676|676"]
				     }
					 else if(s1.value == "TT"){
				     var optionPhoneArray = ["1|1"] 
				     }
				     else if(s1.value == "TN"){
				     var optionPhoneArray = ["216|216"]
				     }
					 else if(s1.value == "TR"){
				     var optionPhoneArray = ["90|90"] 
				     }
				     else if(s1.value == "TM"){
				     var optionPhoneArray = ["993|993"]
				     }
					 else if(s1.value == "TC"){
				     var optionPhoneArray = ["1|1"] 
				     }
				     else if(s1.value == "TV"){
				     var optionPhoneArray = ["688|688"]
				     }
					 else if(s1.value == "VI"){
				     var optionPhoneArray = ["1|1"] 
				     }
				     else if(s1.value == "UG"){
				     var optionPhoneArray = ["256|256"]
				     }
					 else if(s1.value == "UA"){
				     var optionPhoneArray = ["380|380"] 
				     }
				     else if(s1.value == "AE"){
				     var optionPhoneArray = ["971|971"]
				     }
					 else if(s1.value == "GB"){
				     var optionPhoneArray = ["44|44"] 
				     }
				     else if(s1.value == "US"){
				     var optionPhoneArray = ["1|1"]
				     }
					 else if(s1.value == "UY"){
				     var optionPhoneArray = ["598|598"] 
				     }
				     else if(s1.value == "UZ"){
				     var optionPhoneArray = ["998|998"]
				     }
					 else if(s1.value == "VU"){
				     var optionPhoneArray = ["678|678"] 
				     }
				     else if(s1.value == "VA"){
				     var optionPhoneArray = ["378|378"]
				     }
					 else if(s1.value == "VE"){
				     var optionPhoneArray = ["58|58"] 
				     }
				     else if(s1.value == "VN"){
				     var optionPhoneArray = ["84|84"]
				     }
					 else if(s1.value == "WF"){
				     var optionPhoneArray = ["681|681"] 
				     }
				     else if(s1.value == "EH"){
				     var optionPhoneArray = ["212|212"]
				     }
					 else if(s1.value == "YE"){
				     var optionPhoneArray = ["967|967"] 
				     }
				     else if(s1.value == "ZM"){
				     var optionPhoneArray = ["260|260"]
				     }
					 else if(s1.value == "ZW"){
				     var optionPhoneArray = ["263|263"] 
				     }

				     for(var option in optionPhoneArray){
				     var pair = optionPhoneArray[option].split("|");     
					 s2.value = '+'+pair[0];
					 _("regcountrycode").value = '+'+pair[0];
				 }
				 
				     for(var option in optionStateArray){
						 var pair = optionStateArray[option].split("|");
						 var newOption2 = document.createElement("option");
						 newOption2.value = pair[1];
						 newOption2.innerHTML = pair[1];	 
						 s3.options.add(newOption2);				 
					 }
			 }

