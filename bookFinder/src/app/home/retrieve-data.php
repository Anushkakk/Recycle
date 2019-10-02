<?php
   header("Content-Type: application/json; charset=UTF-8");
   header('Access-Control-Allow-Methods: GET, POST');
   header("Access-Control-Allow-Origin: *");

   // Define database connection parameters
   $servername      = 'localhost';
   $username      = 'sysadmin';
   $password     = 'tomelocate';
   $dbname      = 'libstacks';

   // Create connection
   /*$conn = mysql_connect('localhost', 'root', 'tomelocate');
   if(! $conn ) {
      die('Could not connect: ' . mysql_error());
   }*/

   $conn = mysql_connect('localhost', 'root', 'tomelocate') or die("connect failed");
   mysql_select_db('libstacks', $conn) or die ("select failed".mysql_error());

   //print_r 'Connected!'

   //mysql_select_db($dbname);

   try{
      $qry_db = 'SELECT floor FROM callnums WHERE end_call = "QA76"';
      $result = mysql_query($qry_db);
      $finalres = mysql_fetch_row($result);
   } catch (PDOException $e) {
    //  print_r 'Didnt Query!';
   }
   

   print_r($finalres[0]);

   /*if ($result->num_rows > 0) {
      // output data of each row
      while($row = $result->fetch_assoc()) {
         echo "Collection: " . $row["collection"].  "<br>";
      }
   } else {
      echo "0 results";
   }*/
   mysql_close($conn);

?>