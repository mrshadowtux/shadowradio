$(document).ready
(
	function()
	{
		function checkmusic()
		{
			$("main section#senderliste article").each
			(
				function()
				{
					var songurl="whatsplaying.php?sender="+$(this).data("title")+"&timestamp="+Math.floor(Date.now()/1000); // timestamp um cachen zu verhindern
					$(this).find("output.song").load(songurl);
				}
			);
		}

		checkmusic();

		var player=$("main audio#player");
		var status=$("footer output#status");

		setInterval
		(
			function()
			{
				checkmusic();
			}
		,15000);


		$("main section#senderliste article ul.actions li button.listen_here").click
		(
			function()
			{
				var sender=$(this).parent().parent().parent();
				var streamlink=sender.data("streamlink");
				if(player.attr("src")==streamlink)
				{
					alert("Der Sender läuft doch schon! Den lade ich nicht erneut.");
				}
				else
				{
					player.trigger("stop");
					player.attr("src",streamlink);
					player.trigger("play");
					status.html("Spiele den Sender "+sender.data("title"));
				}
			}
		);
		$("main section#senderliste article ul.actions li button.listen_server").click
		(
			function()
			{
				alert("Noch nicht implementiert..");
			}
		);
	}
);
