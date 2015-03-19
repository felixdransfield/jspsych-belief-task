//JQUERY HELPER FUNCTIONS
        
     

        
        //KEYDOWN FOCUSES INPUT
        $(document).keydown(function(e){
          $('#inp').focus();
          });

         
        $(function() {
          $(document).keypress(function (e) {
            if ((e.which && e.which == 48, 49, 50, 51, 52, 53, 54, 55, 56, 57) || (e.keyCode && e.keyCode == 48, 49, 50, 51, 52, 53, 54, 55, 56, 57)) {
              $(function() {
                $('#inp').keyup(function (e) {
                  if($('#inp').val().length == 2){
                    $("p").addClass("hide");
                    setTimeout(function(){
                      $("#jspsych-survey-text-next").click();
                    }, 3000);
                  } 
                });
              });

            } else {
              return true;
            }
          });
        });








  //COUNTING VARIABLES
    var training_count = -1;
    var run1_count = -1;
    var order_list =[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39];



    //EVENTS AND PROBABILITIES
    var training_events = ["Bullied by a stranger", "Tummy pain", "Stung by a wasp"];
    var training_events_prob = ["21", "45", "42"];
    
    var events = ["Fraud when buying something on the internet", "Theft from vehicle", "Sports related accident", "Household accident", "Skin burn", "knee osteoarthritis (causing knee pain and swelling)", "Bicycle theft", "Being cheated on by husband/wife", "More than 47 thousand dollars debt", "Miss a flight", "Hernia (rupture of internal tissue wall)", "Death before 80", "Witness a traumatizing accident", "Domestic burglary", "Insect infestation (e.g. ants) in your home", "Depression", "Heart failures", "Obesity", "Irritable bowel syndrome (disorder of the gut)", "Chronic high blood pressure", "Diabetes (type 2)", "Migraine", "Disease of spinal cord", "Serious hearing problems", "Lose wallet", "Divorce", "Dementia", "Drug abuse", "Victim of bullying at work (non physical)", "Arteries hardening (narrowing of blood vessels)", "Theft from person", "Having fleas/lice", "bone fracture (break)", "Food poisoning", "Sexual dysfunction", "Hepatitis A or B", "Victim of violence with need to go to ER", "Cancer (of: digestive system/lung/prostate/breast/skin)", "Abnormal heart rhythm", "Parkinson's disease"];
    var events_prob = ["70", "63", "62", "58", "56", "54", "53", "52", "48", "44", "43", "41", "40", "39", "41", "37", "35", "32", "30", "29", "27", "26", "24", "22", "51", "50", "18", "17", "46", "45", "42", "42", "39", "40", "38", "38", "36", "34", "28", "10"];
      

  // TEXT VARIABLES
  var participant_number = ['<p>Enter a participant number</p>'];
	var welcome_message = '<p>Welcome to the experiment.<br><br>Press any key to begin.</p>';
	var instructions1 = '<p>Welcome to this part of the experiment!<br>This is a short training session. A description of a possible life event will be presented on screen. Imagine this event happening to you as accurately as you can.<br><br>Press any key to continue</p>';
	var instructions2 = '<p>When the words \'Estimation of happening?\' appear, estimate how likely this event is to occur to YOU.<br>Type in the likelihood from 03%-77% (e.g. type 05 for 5% and 74 for 74%) Try to give your estimation as fast as possible. You cannot change your answer. After 8 seconds the program will continue automatically. <br><br>Press any key to continue</p>';
	var instructions3 = '<p>After your response, the statistics of the ACTUAL average likelihood of this event happening to someone like you will appear on the screen.<br><br>Press any key to begin the training</p>';

  
  var end_training = '<p>END OF TRAINING<br> You will now undertake the experiment for real.<br> Press any key to begin the experiment.</p>';

  var end_run1 = '<p>You will now do the same task again.<br>Some of the events you will have seen before, but just put in how likely you think each event is to happen to you now regardless of what you put before.Also note that this time, you will not be presented with the actual average likelihood of each event occurring.<br><br>When you are ready to proceed please press any key.</p>';

  var end_run2 = '<p>Next you will complete a memory test.You will be presented with all events again.<br>Please recall the ACTUAL probability of each event to happen to an average person in the developed world, as presented earlier in the experiment.<br>You have as much time as you need to type in the answer.<br><br>Please press any key when you are ready to begin.</p>';

  var end_runs = '<p>Please press any key to complete the remainder of this section.</p>';

  var vivid_instructions = '<p> In the following trials you will be asked: How vividly can you imagine this event?<br>Please evaluate all events one at a time on the scales presented.<br>The range of each scale will be from 1 to 6 (1 = not vivdly at all, 6= very vividly).<br><br>Press any key to begin.</p>';

  var familiarity_instructions = '<p>In the following trials you will be asked: Has this event happened to you before?<br>Please evaluate all events one at a time on the scales presented.<br>The range of each scale will be from 1 to 6 (1=never, 6= very often).<br><br> Press any key to begin. </p>';

  var negativity_instructions = '<p>In the following trials you will be asked: How negative would this event be/is this event for you?<br>Please evaluate all events one at a time on the scales presented.<br>The range of each scale will be from 1 to 6 (1 = not at all negative, 6 = extremely negative)<br><br>Press any key to begin.</p>';

  var end_text = '<p>The end!<br>Thank you for your participation!</p>'



  //EXPERIMENT FUNCTIONS
    //COUNTING FUNTIONS
    shuffle = function(v){
    for(var j, x, i = v.length; i; j = parseInt(Math.random() * i), x = v[--i], v[i] = v[j], v[j] = x);
    return v;
    };

    var user_list = shuffle(order_list); 


      
      //TRAINING FUNCTIONS
      var countRound = function(){
        training_count++;
        return training_count;
      }
      var training_question = function(){
        return ["<p>"+training_events[training_count]+" <br>Estimation of happening?<div class='percent'>% chance</div></p>"];
      }

      var result = function(){
        return ["<p>Actual chance of happening<br><br>" +training_events_prob[training_count]+ "%</p>"];
      }

      var return_training_question = function(){
        return training_events[training_count];
      }


  //SHOW LIST
  var showList = function(){
    return user_list;
  }

  //RUN FUNCTIONS
  var countRound1 = function(){
    run1_count++;
    return run1_count;
  }

  var return_question = function(){
        return events[user_list[run1_count]];
      }

  var question = function(){
    return ["<p>"+events[user_list[run1_count]]+"<br>Estimation of happening?<div class='percent'>% chance</div></p>"];
  }
  var result1 = function(){
        return ["<p>Actual chance of happening<br><br>" +events_prob[user_list[run1_count]]+ "%</p>"];
    }

  var recallQuestion = function(){
    return ["<p>Please recall the actual probability of this event happening to an average person in the developed world, as presented previously.<br><br> "+events[user_list[run1_count]]+"<br> Your answer: <div class='percent'>% chance</div></p>"];
  }

  var vividQuestion = function(){
    return ["<p>How vividly can you imagine this event?<br>1 = not vivdly at all, 6= very vividly<br><br>"+events[user_list[run1_count]]+"</p>"];
  }

  var familiarityQuestion = function(){
    return ["<p>Has this event happened to you before?<br>(1 = never, 6 = very often)<br><br>"+events[user_list[run1_count]]+"</p>"];
  }

   var negativityQuestion = function(){
    return ["<p>How negative would this event be/is this event for you? <br>(1 = not at all negative, 6 = extremely negative)<br><br>"+events[user_list[run1_count]]+"</p>"];
  }


  //RESET COUNTER
  var resetCounter = function(){
    run1_count = -1;
    return run1_count;
  }

  //RESHUFFLE
    var reShuffle = function(){
      var user_list = shuffle(order_list); 
      return user_list;
    }

 


    


//DEFINIE EXPERIMENT BLOCKS
    
    //PARTICIPANT NUMBER
    var participant_block = {
      type: 'survey-text',
      questions: [participant_number],
    };


    //BEGININNING ISTRUCTIONS
    var instructions_block = {
      type: "text",
      text: [welcome_message, instructions1, instructions2, instructions3
      ]}; 


    // TRAINING BLOCK
    var count_block = {
      type: "call-function",
      func: countRound,
    };

    var return_training_question_block = {
      type: "call-function",
      func: return_training_question,
    }

    var training_survey_block = {
      type: 'survey-text',
      questions: [training_question],
      timing_response: 8000,
    };
    var cross_block = {
      type: "single-stim",
      stimuli: ['images/cross.png'],
      choices: ['F'],
      timing_response: 1000
    };
    var result_block = {
      type: "text",
      text: [result]
    };
    var training_chunk = {
      chunk_type: 'linear',
      timeline: [count_block, return_training_question_block, training_survey_block, cross_block, result_block, count_block, return_training_question_block, training_survey_block, cross_block, result_block, count_block, return_training_question_block, training_survey_block, cross_block, result_block]
    };

    // END OF TRAINING BLOCK
    var end_training_block = {
      type: "text",
      text: [end_training]
    };

    var show_list_block = {
      type: "call-function",
      func: showList,
    }

    //EVENTS RUN 1
    var count1_block = {
      type: "call-function",
      func: countRound1,
    };

    var return_question_block = {
      type: "call-function",
      func: return_question,
    };
    
    var run1_survey_block = {
      type: "survey-text",
      questions: [question],
      timing_response: 8000,
    };

    var result1_block = {
      type: "text",
      text: [result1]
    };

    var run1_chunk = {
      chunk_type: 'while',
      timeline: [count1_block, return_question_block, run1_survey_block, cross_block, result1_block],
      continue_function: function(){
        if (run1_count > 38){
          return false;
        }
        else{
          return true;
        }
      }
    };

    var end_run1_block = {
      type: "text",
      text: [end_run1]
    };


  // RESET COUNTER + RESHUFFLE
    var reset_block = {
      type: "call-function",
      func: resetCounter,
    };
   
    var reShuffle_block = {
      type: "call-function",
      func: reShuffle,
    };

    var reset_chunk = {
      chunk_type: 'linear',
      timeline: [reset_block, reShuffle_block],
    }

  // EVENTS RUN 2
  var run2_chunk = {
    chunk_type: 'while',
      timeline: [count1_block, return_question_block, run1_survey_block, cross_block],
      continue_function: function(){
        if (run1_count > 38){
          return false;
        }
        else{
          return true;
        }
      }
    };
  
  //START RUN 3
  var end_run2_block = {
      type: "text",
      text: [end_run2]
    }
   var run3_survey_block = {
      type: "survey-text",
      questions: [recallQuestion],
      timing_response: 8000,
   }
  
  var run3_chunk = {
    chunk_type: 'while',
      timeline: [count1_block, return_question_block, run3_survey_block, cross_block],
      continue_function: function(){
        if (run1_count > 38){
          return false;
        }
        else{
          return true;
        }
      }
    };

    //END RUNS
    var end_runs = {
      type: "text",
      text: [end_runs]
    }

    //VIVIDNESS
    var vivid_intructions_block = {
      type: "text",
      text: [vivid_instructions]
    }
    var vivid_block = {
      type: "single-stim",
      stimuli: [vividQuestion],
      choices: [49, 50, 51, 52, 53, 54],
      is_html: true,
      timing_response: 8000,
    }

    var vivid_chunk = {
      chunk_type: 'while',
      timeline: [count1_block, return_question_block, vivid_block, cross_block],
      continue_function: function(){
        if (run1_count > 38){
          return false;
        }
        else{
          return true;
        }
      }
    };

    //FAMILIARITY
    var familiarity_instructions_block = {
      type: "text",
      text: [familiarity_instructions]
    };
    var familiarity_block = {
      type: "single-stim",
      stimuli: [familiarityQuestion],
      choices: [49, 50, 51, 52, 53, 54],
      is_html: true,
      timing_response: 8000,
    };

    var familiarity_chunk = {
      chunk_type: 'while',
      timeline: [count1_block, return_question_block, familiarity_block, cross_block],
      continue_function: function(){
        if (run1_count > 38){
          return false;
        }
        else{
          return true;
        }
      }
    };

    
    //NEGATIVITY
    var negativity_instructions_block = {
      type: "text",
      text: [negativity_instructions]
    };
    var negativity_block = {
      type: "single-stim",
      stimuli: [negativityQuestion],
      choices: [49, 50, 51, 52, 53, 54],
      is_html: true,
      timing_response: 8000,
    };

    var negativity_chunk = {
      chunk_type: 'while',
      timeline: [count1_block, return_question_block, negativity_block, cross_block],
      continue_function: function(){
        if (run1_count > 0){
          return false;
        }
        else{
          return true;
        }
      }
    };

    //END
    var end_block = {
      type: "text",
      text: [end_text]
    };


  


 
    /* create experiment definition array */
    var experiment = [];
    experiment.push(participant_block);
    experiment.push(instructions_block);
    experiment.push(training_chunk);
    experiment.push(end_training_block);
    experiment.push(show_list_block);
    experiment.push(run1_chunk);
    experiment.push(reset_chunk);
    experiment.push(end_run1_block);
    experiment.push(run2_chunk);
    experiment.push(reset_chunk);
    experiment.push(end_run2_block);
    experiment.push(run3_chunk);
    experiment.push(end_runs);
    experiment.push(reset_chunk);
    experiment.push(vivid_intructions_block);
    experiment.push(vivid_chunk);
    experiment.push(reset_chunk);
    experiment.push(familiarity_instructions_block);
    experiment.push(familiarity_chunk);
    experiment.push(reset_chunk);
    experiment.push(negativity_instructions_block);
    experiment.push(negativity_chunk);
    experiment.push(end_block);
    

    /* start the experiment */
    jsPsych.init({
      experiment_structure: experiment,
         on_finish: function(data){jsPsych.data.localSave('data.csv', 'csv', {subject: "n"});}
      
    });
