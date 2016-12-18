function odliczanie()
{
	licznik = 0;
	document.getElementById("clickCount").innerHTML = licznik;
	setTimeout("odliczanie()",30000);
}

