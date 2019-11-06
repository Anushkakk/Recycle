<?php
   //Define global variables for beginning, ending, and user call numbers
   $BC_Subject;
   $BC_ClassNum;
   $BC_Cutter1;
   $BC_Cutter2;
   $BC_Cutter3;
   $BC_Version;
   $BC_Copy;

   $EC_Subject;
   $EC_ClassNum;
   $EC_Cutter1;
   $EC_Cutter2;
   $EC_Cutter3;
   $EC_Version;
   $EC_Copy;

   $CN_Subject;
   $CN_ClassNum;
   $CN_Cutter1;
   $CN_Cutter2;
   $CN_Cutter3;
   $CN_Version;
   $CN_Copy;

   function assignCN($CN_Arr) {
      if(sizeof($CN_Arr) > 0)
         $GLOBALS['CN_Subject']  = $CN_Arr[0];
      if(sizeof($CN_Arr) > 1)
         $GLOBALS['CN_ClassNum'] = $CN_Arr[1];
      if(sizeof($CN_Arr) > 2)
         $GLOBALS['CN_Cutter1']  = $CN_Arr[2];

      if(sizeof($CN_Arr) > 3) {
         for($i = 3; i < sizeof($CN_Arr); ++$i) {
            if(substr($CN_Arr[$i], 0, 2) == 'v.' || substr($CN_Arr[$i], 0, 2) == 'V.') {
               $GLOBALS['CN_Version'] = $CN_Arr[$i];
            }

            else if(substr($CN_Arr[$i], 0, 2) == 'c.' || substr($CN_Arr[$i], 0, 2) == 'C.') {
               $GLOBALS['CN_Copy'] = $CN_Arr[$i];
            }

            else if ((ord(substr($CN_Arr[$i], 0, 1)) >= 65 && ord(substr($CN_Arr[$i], 0, 1)) <= 90) ||
            (ord(substr($CN_Arr[$i], 0, 1)) >= 97 && ord(substr($CN_Arr[$i], 0, 1)) <= 122) && $GLOBALS['CN_Cutter2'] == "") {
               $GLOBALS['CN_Cutter2'] = $CN_Arr[$i];
            }

            else if ((ord(substr($CN_Arr[$i], 0, 1)) >= 65 && ord(substr($CN_Arr[$i], 0, 1)) <= 90) ||
            (ord(substr($CN_Arr[$i], 0, 1)) >= 97 && ord(substr($CN_Arr[$i], 0, 1)) <= 122) && $GLOBALS['CN_Cutter3'] == "") {
               $GLOBALS['CN_Cutter3'] = $CN_Arr[$i];
            }

            else {
               return;
            }
         }
      }
   }
   
   function assignBC($BC_Arr) {
      if(sizeof($BC_Arr) > 0)
         $GLOBALS['BC_Subject']  = $BC_Arr[0];
      if(sizeof($BC_Arr) > 1)
         $GLOBALS['BC_ClassNum'] = $BC_Arr[1];
      if(sizeof($BC_Arr) > 2)
         $GLOBALS['BC_Cutter1']  = $BC_Arr[2];
      
      if(sizeof($BC_Arr) > 3) {
         for($i = 3; i < sizeof($BC_Arr); ++$i) {
            if(substr($BC_Arr[$i], 0, 2) == 'v.' || substr($BC_Arr[$i], 0, 2) == 'V.') {
               $GLOBALS['BC_Version'] = $BC_Arr[$i];
            }

            else if(substr($BC_Arr[$i], 0, 2) == 'c.' || substr($BC_Arr[$i], 0, 2) == 'C.') {
               $GLOBALS['BC_Copy'] = $BC_Arr[$i];
            }

            else if ((ord(substr($BC_Arr[$i], 0, 1)) >= 65 && ord(substr($BC_Arr[$i], 0, 1)) <= 90) ||
            (ord(substr($BC_Arr[$i], 0, 1)) >= 97 && ord(substr($BC_Arr[$i], 0, 1)) <= 122) && $GLOBALS['BC_Cutter2'] == "") {
               $GLOBALS['BC_Cutter2'] = $BC_Arr[$i];
            }

            else if ((ord(substr($BC_Arr[$i], 0, 1)) >= 65 && ord(substr($BC_Arr[$i], 0, 1)) <= 90) ||
            (ord(substr($BC_Arr[$i], 0, 1)) >= 97 && ord(substr($BC_Arr[$i], 0, 1)) <= 122) && $GLOBALS['BC_Cutter3'] == "") {
               $GLOBALS['BC_Cutter3'] = $BC_Arr[$i];
            }
            
            else {
               return;
            }
         }
      }
   }

   function assignEC($EC_Arr) {
      if(sizeof($EC_Arr) > 0)
         $GLOBALS['EC_Subject']  = $EC_Arr[0];
      if(sizeof($EC_Arr) > 1)
         $GLOBALS['EC_ClassNum'] = $EC_Arr[1];
      if(sizeof($EC_Arr) > 2)
         $GLOBALS['EC_Cutter1']  = $EC_Arr[2];

      if(sizeof($EC_Arr) > 3) {
         for($i = 3; i < sizeof($EC_Arr); ++$i) {
            if(substr($EC_Arr[$i], 0, 2) == 'v.' || substr($EC_Arr[$i], 0, 2) == 'V.') {
               $GLOBALS['EC_Version'] = $EC_Arr[$i];
            }

            else if(substr($EC_Arr[$i], 0, 2) == 'c.' || substr($EC_Arr[$i], 0, 2) == 'C.') {
               $GLOBALS['EC_Copy'] = $EC_Arr[$i];
            }  

            else if ((ord(substr($EC_Arr[$i], 0, 1)) >= 65 && ord(substr($EC_Arr[$i], 0, 1)) <= 90) ||
            (ord(substr($EC_Arr[$i], 0, 1)) >= 97 && ord(substr($EC_Arr[$i], 0, 1)) <= 122) && $GLOBALS['EC_Cutter2'] == "") {
               $GLOBALS['EC_Cutter2'] = $EC_Arr[$i];
            }

            else if ((ord(substr($EC_Arr[$i], 0, 1)) >= 65 && ord(substr($EC_Arr[$i], 0, 1)) <= 90) ||
            (ord(substr($EC_Arr[$i], 0, 1)) >= 97 && ord(substr($EC_Arr[$i], 0, 1)) <= 122) && $GLOBALS['EC_Cutter3'] == "") {
               $GLOBALS['EC_Cutter3'] = $EC_Arr[$i];
            }
            
            else {
               return;
            }
         }
      }
   }

   function normalize($callNum) {
      //Define helping variables
      $cutterNum = 0;
      $str1;
      $str2;

      //Remove all spaces from the string
      $callNum =  str_replace(' ', '', $callNum);

      //Read the second character of the string (the first will always be a letter)
      //If the second character is a number, place a space before the second character
      if(ord(substr($callNum, 1, 1)) >= 48 && ord(substr($callNum, 1, 1)) <= 57) {
          $str1 = substr($callNum, 0, 1);
          $str2 = substr($callNum, 1);
          $callNum = $str1 . ' ' . $str2;
      }

      //Otherwise, place a space after the second character
      else if((ord(substr($callNum, 1, 1)) >= 65 && ord(substr($callNum, 1, 1)) <= 90) ||
      (ord(substr($callNum, 1, 1)) >= 97 && ord(substr($callNum, 1, 1)) <= 122)) {
          $str1 = substr($callNum, 0, 2);
          $str2 = substr($callNum, 2);
          $callNum = $str1 . ' ' . $str2;
      }

      //Continue reading until a period (.) is found
      for($i = 2; $i < strlen($callNum); ++$i) {
      
         //To prevent accidental infinite loops
         if($i > 50)
            break;

         //When a period is found
         if(substr($callNum, $i, 1) == '.' && $cutterNum == 0) {
            //Read the next character. If it is a number, it's still part of the classification number
            //If it is a letter, it's the beginning of the cutter and a space is added before the period
            if((ord(substr($callNum, $i + 1, 1)) >= 65 && ord(substr($callNum, $i + 1, 1)) <= 90) ||
            (ord(substr($callNum, $i + 1, 1)) >= 97 && ord(substr($callNum, $i + 1, 1)) <= 122)) {
               $str1 = substr($callNum, 0, $i);
               $str2 = substr($callNum, $i);
               $callNum = $str1 . ' ' . $str2;
               $cutterNum = 1;
               $i += 3;
            }
         }

         //Continue reading in characters.  If a c or a C is found, check the next letter
         if(substr($callNum, $i, 1) == 'c' || substr($callNum, $i, 1) == 'C') {
            //If it's a period, its a copy number and a space is added before the c
            if(substr($callNum, $i + 1, 1) == '.') {
               $str1 = substr($callNum, 0, $i);
               $str2 = substr($callNum, $i);
               $callNum = $str1 . ' ' . $str2;
               $i += 3;
            }
            //Otherwise, this is a second cutter and a space is added before the c
            else {
               $str1 = substr($callNum, 0, $i);
               $str2 = substr($callNum, $i);
               $callNum = $str1 . ' ' . $str2;
               $i++;
            }
         }

         //If a v or a V is found, check the next letter
         if(substr($callNum, $i, 1) == 'v' || substr($callNum, $i, 1) == 'V') {
            //If it's a period, its a version number and a space is added before the v
            if(substr($callNum, $i + 1, 1) == '.') {
               //echo("GOT HERE: VERSION/COPY FOUND\n");
               //echo(substr($callNum, $i) . "\n");
               $str1 = substr($callNum, 0, $i);
               $str2 = substr($callNum, $i);
               $callNum = $str1 . ' ' . $str2;
               $i += 3;
            }
            //Otherwise, this is a second cutter and a space is added before the v
            else {
               $str1 = substr($callNum, 0, $i);
               $str2 = substr($callNum, $i);
               $callNum = $str1 . ' ' . $str2;
               $i++;
            }
         }

         //If a period is found, this is a second cutter, the period should be removed and a space
         //is added before the letter
         if(substr($callNum, $i, 1) == '.' && $cutterNum == 1) {
            $str1 = substr($callNum, 0, $i);
            $str2 = substr($callNum, $i);
            $str2 = substr($str2, 1);
            $callNum = $str1 . ' ' . $str2;
            $i += 2;
         }

         //If any other letter is found, (not c or v), this is a second cutter and a space is
         //added before the letter
         if((ord(substr($callNum, $i, 1)) >= 65 && ord(substr($callNum, $i, 1)) <= 90) ||
         (ord(substr($callNum, $i, 1)) >= 97 && ord(substr($callNum, $i, 1)) <= 122)) {

            if(!(substr($callNum, $i, 1) == 'v' || substr($callNum, $i, 1) == 'V' ||
            substr($callNum, $i, 1) == 'c' || substr($callNum, $i, 1) == 'C')) {
               $str1 = substr($callNum, 0, $i);
               $str2 = substr($callNum, $i);
               $callNum = $str1 . ' ' . $str2;
               $i++;
            }
         }
      }

      return $callNum;

   }
   
 
   header("Content-Type: application/json; charset=UTF-7");
   header('Access-Control-Allow-Methods: GET, POST, OPTIONS');
   header("Access-Control-Allow-Origin: *");
   header("Access-Control-Allow-Headers: Content-Type");

   // Define database connection parameters
   $servername = 'localhost';
   $location   = 'root';
   $password   = 'tomelocate';
   $dbname     = 'libstacks';

   $conn = mysql_connect($servername, $location, $password) or die("connect failed");
   mysql_select_db($dbname, $conn) or die ("select failed".mysql_error());

   $postdata = file_get_contents("php://input");
   $request = json_decode($postdata, true);		
   $callnum = $request["callnum"];
   $collection = $request["collection"];

   $CN_Arr = explode(' ', $callnum);
   assignCN($CN_Arr);

   try {
      for($i = 0; $i < 450; ++$i) {
         $GLOBALS['BC_Subject'] = "";
         $GLOBALS['BC_ClassNum'] = "";
         $GLOBALS['BC_Cutter1'] = "";
         $GLOBALS['BC_Cutter2'] = "";
         $GLOBALS['BC_Cutter3'] = "";
         $GLOBALS['BC_Version'] = "";
         $GLOBALS['BC_Copy'] = "";

         $GLOBALS['EC_Subject'] = "";
         $GLOBALS['EC_ClassNum'] = "";
         $GLOBALS['EC_Cutter1'] = "";
         $GLOBALS['EC_Cutter2'] = "";
         $GLOBALS['EC_Cutter3'] = "";
         $GLOBALS['EC_Version'] = "";
         $GLOBALS['EC_Copy'] = "";

         $qry_db = 'SELECT begin_call FROM LibraryStacks WHERE row_num = ' . $i;
         $row = mysql_query($qry_db); 
         if($row)
         $BC = mysql_fetch_row($row);
         $beginCall = normalize($BC[0]);

         $qry_db = 'SELECT end_call FROM LibraryStacks WHERE row_num = ' . $i;
         $row = mysql_query($qry_db);
         if($row)
         $EC = mysql_fetch_row($row);
         $endCall = normalize($EC[0]);
	
         $qry_db = 'SELECT collection FROM LibraryStacks WHERE row_num = ' . $i;
         $row = mysql_query($qry_db);
         if($row)
         $CO = mysql_fetch_row($row);

         if($CO[0] == $collection) {
            $BC_Arr = explode(' ', $beginCall);
            $EC_Arr = explode(' ', $endCall);
            assignBC($BC_Arr);
            assignEC($EC_Arr);

            echo($GLOBALS['BC_Subject'] . "\n");
            echo($GLOBALS['BC_ClassNum'] . "\n");
            echo($GLOBALS['BC_Cutter1'] . "\n");
            echo($GLOBALS['BC_Cutter2'] . "\n");
            echo($GLOBALS['BC_Cutter3'] . "\n");
            echo($GLOBALS['BC_Version'] . "\n");
            echo($GLOBALS['BC_Copy'] . "\n");

            echo($GLOBALS['EC_Subject'] . "\n");
            echo($GLOBALS['EC_ClassNum'] . "\n");
            echo($GLOBALS['EC_Cutter1'] . "\n");
            echo($GLOBALS['EC_Cutter2'] . "\n");
            echo($GLOBALS['EC_Cutter3'] . "\n");
            echo($GLOBALS['EC_Version'] . "\n");
            echo($GLOBALS['EC_Copy'] . "\n");

            echo($GLOBALS['CN_Subject'] . "\n");
            echo($GLOBALS['CN_ClassNum'] . "\n");
            echo($GLOBALS['CN_Cutter1'] . "\n");
            echo($GLOBALS['CN_Cutter2'] . "\n");
            echo($GLOBALS['CN_Cutter3'] . "\n");
            echo($GLOBALS['CN_Version'] . "\n");
            echo($GLOBALS['CN_Copy'] . "\n");

            $match = 0;

            //Check Subjects
            if($GLOBALS['CN_Subject'] >= $GLOBALS['BC_Subject'] && $GLOBALS['CN_Subject'] <= $GLOBALS['EC_Subject']) {
               $match = 1;
            }

            //Check Classification Number
            if($match) {
               $match = 0;

               //for($char = 0; $char < )

               if($GLOBALS['CN_ClassNum'] >= $GLOBALS['BC_ClassNum'] && $GLOBALS['CN_ClassNum'] <= $GLOBALS['EC_ClassNum']) {
                  $match = 1;
               }
            }

            //Check Cutter 1
            if($match) {
               $match = 0;
               if(empty($GLOBALS['CN_Cutter1'])) {
                  $match = 1;
               }
               else if(($GLOBALS['CN_Cutter1'] >= $GLOBALS['BC_Cutter1'] || empty($GLOBALS['BC_Cutter1'])) && ($GLOBALS['CN_Cutter1'] <= $GLOBALS['EC_Cutter1'] || empty($GLOBALS['EC_Cutter1']))) {
                  $match = 1;
               }
            }

            //Check Cutter 2
            if($match) {
               $match = 0;
               if(empty($GLOBALS['CN_Cutter2'])) {
                  $match = 1;
               }
               else if(($GLOBALS['CN_Cutter2'] >= $GLOBALS['BC_Cutter2'] || empty($GLOBALS['BC_Cutter2'])) && ($GLOBALS['CN_Cutter2'] <= $GLOBALS['EC_Cutter2'] || empty($GLOBALS['EC_Cutter2']))) {
                  $match = 1;
               }
            }

            //Check Cutter 3
            if($match) {
               $match = 0;
               if(empty($GLOBALS['CN_Cutter3'])) {
                  $match = 1;
               }
               else if(($GLOBALS['CN_Cutter3'] >= $GLOBALS['BC_Cutter3'] || empty($GLOBALS['BC_Cutter3'])) && ($GLOBALS['CN_Cutter3'] <= $GLOBALS['EC_Cutter3'] || empty($GLOBALS['EC_Cutter3']))) {
                  $match = 1;
               }
            }

            //Check Version
            if($match) {
               $match = 0;
               if(empty($GLOBALS['CN_Version'])) {
                  $match = 1;
               }
               else if(($GLOBALS['CN_Version'] >= $GLOBALS['BC_Version'] || empty($GLOBALS['BC_Version'])) && ($GLOBALS['CN_Version'] <= $GLOBALS['EC_Version'] || empty($GLOBALS['EC_Version']))) {
                  $match = 1;
               }
            }

            echo("MATCH: " . $match . "\n");

            //Check Copy
            if($match) {
               $match = 0;
               if(empty($GLOBALS['CN_Copy'])) {
                  $match = 1;
               }
               else if(($GLOBALS['CN_Copy'] >= $GLOBALS['BC_Copy'] || empty($GLOBALS['BC_Copy'])) && ($GLOBALS['CN_Copy'] <= $GLOBALS['EC_Copy'] || empty($GLOBALS['EC_Copy']))) {
                  $match = 1;
               }
            }

            if($match) {
               $qry_db = 'SELECT floor FROM LibraryStacks WHERE end_call = "' . $EC[0] . '"';
               $result = mysql_query($qry_db);  
               if($result)
               $floor = mysql_fetch_row($result);
	
               $qry_db = 'SELECT aisle_number FROM LibraryStacks WHERE end_call = "' . $EC[0] . '"';
               $result = mysql_query($qry_db);  
               if($result)
               $aisle_num = mysql_fetch_row($result);
	
               $qry_db = 'SELECT book_range FROM LibraryStacks WHERE end_call = "' . $EC[0] . '"';
               $result = mysql_query($qry_db);
               if($result)
               $range = mysql_fetch_row($result);
			
               $qry_db = 'SELECT row_num FROM LibraryStacks WHERE end_call = "' . $EC[0] . '"';
               $result = mysql_query($qry_db);
               if($result)
               $ROW = mysql_fetch_row($result);
	
               $qry_db = 'SELECT side FROM LibraryStacks WHERE end_call = "' . $EC[0] . '"';
               $result = mysql_query($qry_db);  
               if($result)
               $side = mysql_fetch_row($result);
            }
         } 
      }
   }

   catch (PDOException $e) {}
  
   print_r($floor[0] . ",");
   print_r($aisle_num[0] . ",");
   print_r($range[0] . ",");
   print_r($side[0] . ",");

   mysql_close($conn);

?>