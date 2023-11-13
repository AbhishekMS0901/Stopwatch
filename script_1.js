
let hours=0,minutes=0,seconds=0; // Declare the variables hours,minutes,seconds and assign all the varaibles with value 0.

let timer_running=false; // Initialize the variable 'timer_running' to false, indicating that the stopwatch is initially not running.

let time_display=document.getElementById("time"); //select the HTML Element using its unique id value.

// Fucntion calculate_time to calculate Hours,minutes and Seconds.
function calculate_time()
       {
	      seconds++;//increment the seconds value by 1.

	      if(seconds==60) // Check if the value of variable 'seconds' is equal to 60
	        {
		        seconds=0; // Assign the value 0 to variable 'seconds'.
		        minutes++; // Increment the 'minutes' variable by 1 
	        }
	      if(minutes==60) // Check if the variable 'minutes' is equal to 60. 
	        {
		       minutes=0; //Assign the value 0 to variable 'minutes'.  
		       hours++; //Increment the 'hours' variable by 1. 
	        }
	      let h,m,s; // Declare the variable h,m,s;
	      if(hours<10) // Check if the value of variable 'hours' is less than 10.
	        {
		        h="0"+hours // Concatenate '0' with the variable 'hours' and assign the result to the variable 'h'.
	        }
	      else
	        {
		        h=hours; // Assign the value of the variable 'hours' to the variable 'h'. 
	        }
	      if(minutes<10) // Check if the value of variable 'minutes' is less than 10.
	        {
		        m="0"+minutes // Concatenate '0' with the variable 'minutes' and assign the result to the variable 'm'.  
	        }
	      else
	        {
		        m=minutes; // Assign the value of variable 'minutes' to variable 'm'.
	        }
	      if(seconds<10) // Check if the value of variable 'seconds' is less than 10. 
	        {
		        s="0"+seconds // Concatenate 0 to the variable 'seconds' and assign the result to variable 's'.
	        }
	      else
	        {
		        s=seconds; // Assign the value of variable 'seconds' to variable 's';
	        }

	      time_display.innerHTML=h+":"+m+":"+s; // Set the inner HTML of the 'time_display' element to the string value.
      }


// Function to start or stop the stopwatch.
function start_stopwatch()
        {
          if(timer_running) // // Check if the timer is already running.
            {
  	          claerInterval(stop_watch_process_id); // If already running, clear the interval to stop the stopwatch.
            }
            timer_running=true; // Set the timer_running flag to true.

            stop_watch_process_id=setInterval(calculate_time,1000); //  // Start the stopwatch by setting an interval to call the calculate_time function every 1000 milliseconds (1 second).
        }

// Function to stop the stopwatch.
function stop_stopwatch()
        {
          clearInterval(stop_watch_process_id); //Clear the interval to stop the stopwatch. 
          timer_running=false; // set the timer_running flag to false. 
        }

// Function to reset the stopwatch.
function reset_stopwatch()
        {
          clearInterval(stop_watch_process_id); //Clear the interval to stop the stopwatch.
          time_display.innerHTML="00:00:00"; //intialize the value of innerHTML of 'time_display' Element to 00:00:00
          timer_running=false; //set the timer_running flag to 0.
          hours=0; // Assign the value 0 to the variable 'hours'. 
          minutes=0; // Assign the value 0 to the variable 'minutes'.
          seconds=0; //Assign the value 0 to the variable 'seconds'.
        }

