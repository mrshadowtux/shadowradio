<?php
	$sender=htmlspecialchars($_GET["sender"]);
	switch($sender)
	{
		case "WDR2":
			system('wget www.wdr2.de/musik/playlist116.html -O - 2>/dev/null | grep currentSongCont -A5 | tail -n2 | sed "s/<strong>//g;s/<\/strong>//g" | xargs');
		break 1;
		case "1Live":
			system('wget www.einslive.de/einslive/musik/playlist/ -O - 2>/dev/null | grep -v form | grep searchPlaylistResult -A 11 | tail -n1 | sed "s/<td><strong>//;s/<\/strong>/:/;s/<\/td>//g"');
		break 1;
		default:
			echo "ToDO - Brauch noch Code zum parsen";
		break 1;
	}
?>
