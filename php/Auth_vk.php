class Auth_vk{
    private $code;
 	private $token;
	private $uid;
	public function __construct() {
	require "config.php";
	public function set_code ($code) {
	this->code =$code;
}
	public function set_token ($token) {
	this->token =$token;
}
public function set_uid ($uid) {
	this->uid =$uid;
}
public function redirect($url) {
	header("location", .$url)
	exit()
}
}
	
}