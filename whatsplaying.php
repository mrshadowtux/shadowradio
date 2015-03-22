<?php
	$sender=htmlspecialchars($_GET["sender"]);
	switch($sender)
	{
		case "1Live":
			system('wget www.einslive.de/einslive/musik/playlist/ -O - 2>/dev/null | grep -v form | grep searchPlaylistResult -A 11 | tail -n 1 | sed "s/<td><strong>//g;s/<\/strong>/:/;s/<\/td>//g"');
		break 1;
		case "WDR2":
			system('wget www.wdr2.de/musik/playlist116.html -O - 2>/dev/null | grep currentSongCont -A 5 | tail -n 2 | sed "s/<strong>//g;s/<\/strong>//g" | xargs');
		break 1;
		case "FFN":
			system('wget http://www.ffn.de/musik/playlist/ -O - 2>/dev/null | grep fnn-responsive-listitem -A 5 | head -n6 | tail -n 2 | cut -d ">" -f 2 | cut -d "<" -f 1 | sed "s/\n/:/g" | xargs');
		break 1;
		default:
			echo "ToDO - Brauch noch Code zum parsen";
		break 1;
	}
?>
