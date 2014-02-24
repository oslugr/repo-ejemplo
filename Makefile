all:
	OUTPUT=`cat README.md | aspell list -d es -p ./.aspell.es.pws`; if [ -n "$OUTPUT" ]; then echo "pepito"; fi

