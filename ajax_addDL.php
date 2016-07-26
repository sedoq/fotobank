<?php
header('Cache-control: no-store; no-cache; must-revalidate');
ini_set('display_errors',0);
error_reporting(E_ALL);

if (!defined('MODX_API_MODE')) {
 define('MODX_API_MODE', true); 
 require_once($_SERVER["DOCUMENT_ROOT"].'/index.php'); 
}
  
$modx = new DocumentParser;

startCMSSession();

$action = (empty($_POST['action']))? '' : $_POST['action'];

$res = '';
switch ($action) {
case 'addit':
        
$idType= $_POST['idType'];
$id= $_POST['id']; 
$parents= $_POST['parents'];
$tpl= $_POST['tpl'];
$depth= $_POST['depth']; 
$orderBy= $_POST['orderBy'];
$tvList = $_POST['tvList'];
$tvPrefix= $_POST['tvPrefix'];
$paginate= $_POST['paginate']; 

        
if(isset($_POST['disp']))
 $display = $_POST['disp'];
else
 $display='5';//количество вывода товара по умолчанию
 
if(isset($_POST['offset']))
 $offset = $_POST['offset'];
else
 $offset=(!empty($offset))? 0 : $offset;//количество вывода товара по умолчанию
	
	$params['idType'] = $idType;
	$params['id'] = 'list';
	$params['parents'] = $parents;	
	$params['tpl'] = $tpl;	
	$params['depth'] = $depth;	
	$params['orderBy'] = $orderBy;
	$params['tvList'] = $tvList;		
	$params['tvPrefix'] = $tvPrefix;
	$params['display'] = $display;
	$params['showParent'] = '0';
	$params['depth'] = $depth;	
	
		$params['display'] = $display;	
		$params['offset']= $offset;
	
	
	$res = $modx->runSnippet('DocLister',$params);
	
break;	
}


if (!empty($res)) {
	echo $res;
}

exit;
?>