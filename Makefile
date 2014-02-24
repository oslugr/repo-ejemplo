all:
	cat README.md | aspell list -d es -p .aspell.es.pws

