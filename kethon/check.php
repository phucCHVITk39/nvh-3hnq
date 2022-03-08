<?
/*
Code by : Nguyen Anh Duc
 Photoshop by:Ho Thuong Tham
 We are best friend
*/
session_start(); // Hàm kh?i t?o session.
require_once('security.class.php');
//$htvk = ($str);
//$str = strtoupper($str);
  if(strlen($_GET['htck']) < 1) $msg[] = "Ten ck qua ngan";
  if(strlen($_GET['htvk']) < 1)$msg[] = "Ten vk qua ngan";
  if(strlen($_GET['hkck']) < 1) $msg[] = "Nhap ho khau di ong kia";
  if(strlen($_GET['hkvk']) < 1)$msg[] = "Nhap ho khau di ba kia";
  if(strlen($_GET['ktck']) < 1) $msg[] = "Thang kia chua ky ma chay ak ";
  if(strlen($_GET['ktvk']) < 1)$msg[] = "Con kia chua ky ma chay ak";
  $sec = new security();
 if($sec->is_secure($_GET['cmck']) == false) $msg[] = "CMND ck phai la so";
  if($sec->is_secure($_GET['cmvk']) == false) $msg[] = "CMND vk phai la so";
 // if($sec->is_secure($_GET['cmvk']) == false) $msg[] = "CMND phai la so";
 //$abc = $_GET['cmck'];
 //if (ctype_alnum($abc)) $msg[] = "CMND phai la so";
      if(count($msg) > 0)
                {
                    for($i = 0; $i < count($msg); $i++)
                        {
                            echo $msg[$i]."<br/>";
                           
                        } echo "<p><a href='javascript:history.back(1)'> <button name='B3'>Quay Lai</button></a></p>";
                        return;
                       
                }
				else
				{
echo "<head>";
echo '<meta http-equiv="refresh" content="0; url=tham.png?';echo "htck=";echo $_GET['htck'];
echo "&htck=";echo $_GET['htck'];
echo "&htvk=";echo $_GET['htvk'];
echo "&nsck=";echo $_GET['nsck'];
echo "&nsvk=";echo $_GET['nsvk'];
echo "&cmck=";echo $_GET['cmck'];
echo "&cmvk=";echo $_GET['cmvk'];
echo "&hkck=";echo $_GET['hkck'];
echo "&hkvk=";echo $_GET['hkvk'];
echo "&ktck=";echo $_GET['ktck'];
echo "&ktvk=";echo $_GET['ktvk'];
echo '">';
echo '<meta name="alexaVerifyID" content="-ly68WA7mzrUxymK2uXFPHosnxE" />
</head>';
		}
?> 