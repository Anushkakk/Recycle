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

   function compare() {
      //Check if the user entered call number falls within the range
      $beginMatch = 0;
      $beginSubjectMatch = 0;
      $beginClassMatch = 0;
      $beginCutter1Match = 0;
      $beginCutter2Match = 0;
      $beginCutter3Match = 0;
      $beginVersionMatch = 0;
      $beginCopyMatch = 0;

      //Check Subjects
      if ($GLOBALS['CN_Subject'] > $GLOBALS['BC_Subject']) {
         $beginMatch = 1;
      } else if ($GLOBALS['CN_Subject'] >= $GLOBALS['BC_Subject']) {
         $beginSubjectMatch = 1;
      }

      //Check Classification Number
      if ($beginSubjectMatch) {
         //if(strpos($GLOBALS['CN_ClassNum'], '.') !== false) {
         if ((double) $GLOBALS['CN_ClassNum'] > (double) $GLOBALS['BC_ClassNum']) {
            $beginMatch = 1;
         } else if ((double) $GLOBALS['CN_ClassNum'] >= (double) $GLOBALS['BC_ClassNum']) {
            $beginClassMatch = 1;
         }
         //}
         /*
         //else {
         $CN_Arr = str_split($GLOBALS['CN_ClassNum']);
         $BC_Arr = str_split($GLOBALS['BC_ClassNum']);
         $EC_Arr = str_split($GLOBALS['EC_ClassNum']);

         $n = 0;

         for ($n; $n < sizeof($CN_Arr); ++$n) {
            if ($n >= sizeof($BC_Arr)) {
               $beginClassMatch = 1;
               break;
            } else if ($n < sizeof($BC_Arr)) {
               if ($CN_Arr[$n] > $BC_Arr[$n]) {
                  $beginMatch = 1;
                  break;
               } else if ($CN_Arr[$n] < $BC_Arr[$n]) {
                  break;
               } else { }
            } else { }
         }

         if ($n == sizeof($CN_Arr)) {
            $beginClassMatch = 1;
         }
         //}
         */

         
      }

      //Check Cutter 1
      if ($beginClassMatch) {
         $CN_Cutter1_Ltr = substr($GLOBALS['CN_Cutter1'], 1, 1);
         $CN_Cutter1_Num = (int) substr($GLOBALS['CN_Cutter1'], 2);

         $BC_Cutter1_Ltr = substr($GLOBALS['BC_Cutter1'], 1, 1);
         $BC_Cutter1_Num = (int) substr($GLOBALS['BC_Cutter1'], 2);

         if (empty($GLOBALS['CN_Cutter1']) || empty($GLOBALS['BC_Cutter1'])) {
            $beginCutter1Match = 1;
         } else {
            if ($CN_Cutter1_Ltr > $BC_Cutter1_Ltr) {
               $beginMatch = 1;
            } else if (strcmp($CN_Cutter1_Ltr, $BC_Cutter1_Ltr) == 0) {
               if ($CN_Cutter1_Num > $BC_Cutter1_Num) {
                  $beginMatch = 1;
               } else if (strcmp($CN_Cutter1_Num, $BC_Cutter1_Num) == 0) {
                  $beginCutter1Match = 1;
               }
            }
         }
      }

      //Check Cutter 2
      if ($beginCutter1Match) {
         $CN_Cutter2_Ltr = substr($GLOBALS['CN_Cutter2'], 0, 1);
         $CN_Cutter2_Num = (int) substr($GLOBALS['CN_Cutter2'], 1);

         $BC_Cutter2_Ltr = substr($GLOBALS['BC_Cutter2'], 0, 1);
         $BC_Cutter2_Num = (int) substr($GLOBALS['BC_Cutter2'], 1);

         if (empty($GLOBALS['CN_Cutter2']) || empty($GLOBALS['BC_Cutter2'])) {
            $beginCutter2Match = 1;
         } else {
            if ($CN_Cutter2_Ltr > $BC_Cutter2_Ltr) {
               $beginMatch = 1;
            } else if (strcmp($CN_Cutter2_Ltr, $BC_Cutter2_Ltr) == 0) {
               if ($CN_Cutter2_Num > $BC_Cutter2_Num) {
                  $beginMatch = 1;
               } else if (strcmp($CN_Cutter2_Num, $BC_Cutter2_Num) == 0) {
                  $beginCutter2Match = 1;
               }
            }
         }
      }

      //Check Cutter 3
      if ($beginCutter2Match) {
         $CN_Cutter3_Ltr = substr($GLOBALS['CN_Cutter3'], 0, 1);
         $CN_Cutter3_Num = (int) substr($GLOBALS['CN_Cutter3'], 1);

         $BC_Cutter3_Ltr = substr($GLOBALS['BC_Cutter3'], 0, 1);
         $BC_Cutter3_Num = (int) substr($GLOBALS['BC_Cutter3'], 1);

         if (empty($GLOBALS['CN_Cutter3']) || empty($GLOBALS['BC_Cutter3'])) {
            $beginCutter3Match = 1;
         } else {
            if ($CN_Cutter3_Ltr > $BC_Cutter3_Ltr) {
               $beginMatch = 1;
            } else if (strcmp($CN_Cutter3_Ltr, $BC_Cutter3_Ltr) == 0) {
               if ($CN_Cutter3_Num > $BC_Cutter3_Num) {
                  $beginMatch = 1;
               } else if (strcmp($CN_Cutter3_Num, $BC_Cutter3_Num) == 0) {
                  $beginCutter3Match = 1;
               }
            }
         }
      }

      //Check Version
      if ($beginCutter3Match) {
         $CN_Version_Num = substr($GLOBALS['CN_Version'], 2);
         $BC_Version_Num = substr($GLOBALS['BC_Version'], 2);

         if (empty($CN_Version_Num)) {
            $beginVersionMatch = 1;
         } else if ($CN_Version_Num >= $BC_Version_Num || empty($BC_Version_Num)) {
            $beginMatch = 1;
         }
      }

      //Check Copy
      if ($beginVersionMatch) {
         $CN_Copy_Num = substr($GLOBALS['CN_Copy'], 2);
         $BC_Copy_Num = substr($GLOBALS['BC_Copy'], 2);

         if (empty($CN_Copy_Num)) {
            $beginCopyMatch = 1;
         } else if ($CN_Copy_Num >= $BC_Copy_Num || empty($BC_Copy_Num)) {
            $beginMatch = 1;
         }
      }

      $endMatch = 0;
      $endSubjectMatch = 0;
      $endClassMatch = 0;
      $endCutter1Match = 0;
      $endCutter2Match = 0;
      $endCutter3Match = 0;
      $endVersionMatch = 0;
      $endCopyMatch = 0;

      //Check Subjects
      if ($GLOBALS['CN_Subject'] < $GLOBALS['EC_Subject']) {
         $endMatch = 1;
      } else if ($GLOBALS['CN_Subject'] <= $GLOBALS['EC_Subject']) {
         $endSubjectMatch = 1;
      }

      //Check Classification Number
      if ($endSubjectMatch) {
         //if (strpos($GLOBALS['CN_ClassNum'], '.') !== false) {
            if ((double) $GLOBALS['CN_ClassNum'] < (double) $GLOBALS['EC_ClassNum']) {
               $endMatch = 1;
               echo "End Match: Ending Call Number: " . $GLOBALS['EC_Subject'] . $GLOBALS['EC_ClassNum'] . $GLOBALS['EC_Cutter1'] . "\n";
            } else if ((double) $GLOBALS['CN_ClassNum'] <= (double) $GLOBALS['EC_ClassNum']) {
               echo "End Class Match: Ending Call Number: " . $GLOBALS['EC_Subject'] . $GLOBALS['EC_ClassNum'] . $GLOBALS['EC_Cutter1'] . "\n";
               echo "User Class Num: " . (double) $GLOBALS['CN_ClassNum'] . "\tEnd Class Num: " . (double) $GLOBALS['EC_ClassNum'] . "\n";
               $endClassMatch = 1;
            }
            /*
         } else {
            $CN_Arr = str_split($GLOBALS['CN_ClassNum']);
            $EC_Arr = str_split($GLOBALS['EC_ClassNum']);
            $EC_Arr = str_split($GLOBALS['EC_ClassNum']);

            $n = 0;

            for ($n; $n < sizeof($CN_Arr); ++$n) {
               if ($n >= sizeof($EC_Arr)) {
                  $endClassMatch = 1;
                  break;
               } else if ($n < sizeof($EC_Arr)) {
                  if ($CN_Arr[$n] < $EC_Arr[$n]) {
                     $endMatch = 1;
                     break;
                  } else if ($CN_Arr[$n] > $EC_Arr[$n]) {
                     break;
                  } else { }
               } else { }
            }

            if ($n == sizeof($CN_Arr)) {
               $endClassMatch = 1;
            }
         }
         */
      }

      //Check Cutter 1
      if ($endClassMatch) {
         $CN_Cutter1_Ltr = substr($GLOBALS['CN_Cutter1'], 1, 1);
         $CN_Cutter1_Num = (int) substr($GLOBALS['CN_Cutter1'], 2);

         $EC_Cutter1_Ltr = substr($GLOBALS['EC_Cutter1'], 1, 1);
         $EC_Cutter1_Num = (int) substr($GLOBALS['EC_Cutter1'], 2);

         if (empty($GLOBALS['CN_Cutter1']) || empty($GLOBALS['EC_Cutter1'])) {
            $endCutter1Match = 1;
         } else {
            if ($CN_Cutter1_Ltr < $EC_Cutter1_Ltr) {
               $endMatch = 1;
            } else if (strcmp($CN_Cutter1_Ltr, $EC_Cutter1_Ltr) == 0) {
               if ($CN_Cutter1_Num < $EC_Cutter1_Num) {
                  $endMatch = 1;
               } else if (strcmp($CN_Cutter1_Num, $EC_Cutter1_Num) == 0) {
                  $endCutter1Match = 1;
               }
            }
         }
      }

      //Check Cutter 2
      if ($endCutter1Match) {
         $CN_Cutter2_Ltr = substr($GLOBALS['CN_Cutter2'], 0, 1);
         $CN_Cutter2_Num = (int) substr($GLOBALS['CN_Cutter2'], 1);

         $EC_Cutter2_Ltr = substr($GLOBALS['EC_Cutter2'], 0, 1);
         $EC_Cutter2_Num = (int) substr($GLOBALS['EC_Cutter2'], 1);

         if (empty($GLOBALS['CN_Cutter2']) || empty($GLOBALS['EC_Cutter2'])) {
            $endCutter2Match = 1;
         } else {
            if ($CN_Cutter2_Ltr < $EC_Cutter2_Ltr) {
               $endMatch = 1;
            } else if (strcmp($CN_Cutter2_Ltr, $EC_Cutter2_Ltr) == 0) {
               if ($CN_Cutter2_Num < $EC_Cutter2_Num) {
                  $endMatch = 1;
               } else if (strcmp($CN_Cutter2_Num, $EC_Cutter2_Num) == 0) {
                  $endCutter2Match = 1;
               }
            }
         }
      }

      //Check Cutter 3
      if ($endCutter2Match) {
         $CN_Cutter3_Ltr = substr($GLOBALS['CN_Cutter3'], 0, 1);
         $CN_Cutter3_Num = (int) substr($GLOBALS['CN_Cutter3'], 1);

         $EC_Cutter3_Ltr = substr($GLOBALS['EC_Cutter3'], 0, 1);
         $EC_Cutter3_Num = (int) substr($GLOBALS['EC_Cutter3'], 1);

         if (empty($GLOBALS['CN_Cutter3']) || empty($GLOBALS['EC_Cutter3'])) {
            $endCutter3Match = 1;
         } else {
            if ($CN_Cutter3_Ltr < $EC_Cutter3_Ltr) {
               $endMatch = 1;
            } else if (strcmp($CN_Cutter3_Ltr, $EC_Cutter3_Ltr) == 0) {
               if ($CN_Cutter3_Num < $EC_Cutter3_Num) {
                  $endMatch = 1;
               } else if (strcmp($CN_Cutter3_Num, $EC_Cutter3_Num) == 0) {
                  $endCutter3Match = 1;
               }
            }
         }
      }

      //Check Version
      if ($endCutter3Match) {
         $CN_Version_Num = substr($GLOBALS['CN_Version'], 2);
         $EC_Version_Num = substr($GLOBALS['EC_Version'], 2);

         if (empty($CN_Version_Num)) {
            $endVersionMatch = 1;
         } else if ($CN_Version_Num <= $EC_Version_Num || empty($EC_Version_Num)) {
            $endMatch = 1;
         }
      }

      //Check Copy
      if ($endVersionMatch) {
         $CN_Copy_Num = substr($GLOBALS['CN_Copy'], 2);
         $EC_Copy_Num = substr($GLOBALS['EC_Copy'], 2);

         if (empty($CN_Copy_Num)) {
            $endCopyMatch = 1;
         } else if ($CN_Copy_Num <= $EC_Copy_Num || empty($EC_Copy_Num)) {
            $endMatch = 1;
         }
      }  

      //Check for match
      if($beginSubjectMatch && $beginClassMatch && $beginCutter1Match && $beginCutter2Match && $beginCutter3Match && $beginVersionMatch && $beginCopyMatch) {
         $beginMatch = 1;
      }
      if ($endSubjectMatch && $endClassMatch && $endCutter1Match && $endCutter2Match && $endCutter3Match && $endVersionMatch && $endCopyMatch) {
         $endMatch = 1;
      }

      if($beginMatch && $endMatch) {
         return 1;
      }
      else {
         return 0;
      }

   }

   function assignCN($CN_Arr) {
      if(sizeof($CN_Arr) > 0)
         $GLOBALS['CN_Subject'] = $CN_Arr[0];
      if(sizeof($CN_Arr) > 1)
         $GLOBALS['CN_ClassNum'] = $CN_Arr[1];
      if(sizeof($CN_Arr) > 2)
         $GLOBALS['CN_Cutter1'] = $CN_Arr[2];

      if(sizeof($CN_Arr) > 3) {
         for($i = 3; $i < sizeof($CN_Arr); ++$i) {
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
         for($i = 3; $i < sizeof($BC_Arr); ++$i) {
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
         for($i = 3; $i < sizeof($EC_Arr); ++$i) {
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

   function normalize($callNum, $collection) {
      if ($collection == "General Collection") {
         $callNum = normalizeGeneral($callNum);
         return $callNum;
      }

      if ($collection == "Children's Collection") {
         $callNum = normalizeChildrens($callNum);
         return $callNum;
      }

      //if collection is curriculum reference

      //if collection is new textbook

      //if collection is old textbook
   }

   function normalizeGeneral($callNum) {
      //Define helping variables
      $cutterNum = 0;
      $str1 = "";
      $str2 = "";

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

            //If the letter is a c or a v, it is a cutter beginning with the letter c or v (since
            //it got past the copy or version number check) and a space is added before the letter
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

   function normalizeChildrens($callNum) {

   }
   
   //body {
 
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
         //Loop through each row of the database table
         for($i = 1; $i < 450; ++$i) {
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

            //Get beginning call number
            $qry_db = 'SELECT begin_call FROM LibraryStacks WHERE row_num = ' . $i;
            $row = mysql_query($qry_db); 
            if($row)
               $BC = mysql_fetch_row($row);


            //Get ending call number
            $qry_db = 'SELECT end_call FROM LibraryStacks WHERE row_num = ' . $i;
            $row = mysql_query($qry_db);
            if($row)
               $EC = mysql_fetch_row($row);
   
            //Get collection
            $qry_db = 'SELECT collection FROM LibraryStacks WHERE row_num = ' . $i;
            $row = mysql_query($qry_db);
            if($row) {
               $CO = mysql_fetch_row($row);
            }

            //For all entries under the specified collection
            if($CO[0] == $collection) {
               $beginCall = normalize($BC[0], $CO[0]);
               $endCall = normalize($EC[0], $CO[0]);

               //Split the database beginning and end calls up
               $BC_Arr = explode(' ', $beginCall);
               $EC_Arr = explode(' ', $endCall);
               //Assign each piece of the beginning and end calls to a variable
               assignBC($BC_Arr);
               assignEC($EC_Arr);

               

               $Match = compare();

               //If match found, get stack info
               if($Match) {
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

                  print_r($floor[0] . ",");
                  print_r($aisle_num[0] . ",");
                  print_r($range[0] . ",");
                  print_r($side[0] . ",");
               
                  mysql_close($conn);

                  exit();
               }
            } 
         }
      }

      catch (PDOException $e) {}

   //}

?>