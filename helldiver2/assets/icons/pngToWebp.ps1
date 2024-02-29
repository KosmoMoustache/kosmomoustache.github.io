Get-ChildItem './' -Filter *.png | ForEach-Object {
    $basename = $_.BaseName
    magick convert $_.FullName -quality 80 "./$basename.webp"
    Remove-Item $_.FullName
}

# for file in ./*.png
# do
#  filename=$(basename "$file")
#  basename="${filename%.*}"
#  magick convert "$file" -quality 80 "./$basename.webp"
#  rm "$file"

# done