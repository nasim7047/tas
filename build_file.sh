echo "BUILD START"
pip install -r requirement.txt
python3.9 manage.py collectstatic
echo "BUILD END"
