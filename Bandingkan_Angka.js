function bandingkan_angka (angka1, angka2){

	if (angka2 > angka1){
	return true;
	}else if (angka1 === angka2){
	return -1;
	}else{
	return false;
	}
}

	console.log(bandingkan_angka(5, 8))
	console.log(bandingkan_angka(5, 3))
	console.log(bandingkan_angka(4, 4))
	console.log(bandingkan_angka(3, 3))
	console.log(bandingkan_angka(17, 2))