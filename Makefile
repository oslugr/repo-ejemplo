all:
	aspell check -d es README.md || exit 1

