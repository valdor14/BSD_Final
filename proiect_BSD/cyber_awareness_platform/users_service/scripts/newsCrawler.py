from bs4 import BeautifulSoup
import requests
from requests_html import HTMLSession
import re
from getpass import getpass
import requests
import pymysql
import mysql.connector



cnx = mysql.connector.connect(user='root', password='root',
							  host='127.0.0.1', port='3306', database='cyber_awareness_platform')
cursor = cnx.cursor()
drop_table_query = "TRUNCATE TABLE News"
cursor.execute(drop_table_query)


# CYBER SECURITY NEWS ARTICLES FOR "THE HACKER NEWS"
source = requests.get('https://thehackernews.com/').text
soup = BeautifulSoup(source, 'lxml')

articles = soup.find_all("a", {"class": "story-link"})
article_nr = 0
print("___________START OF HACKER NEWS_______________")
for article in articles:
	print("----------------------------------------")
	print("----------------------------------------")
	print("----------------------------------------")
	article_nr += 1
	title = article.find("h2", {"class": "home-title"})
	desc = article.find("div", {"class": "home-desc"})
	link = article['href']
	print("Title: ")
	title = title.string
	print(title)
	print("Description: ")
	desc = desc.string
	desc = re.sub(' +', ' ', desc)
	desc = desc.lstrip()
	print(desc)
	print("Link: ")
	print(link)
	print("----------------------------------------")
	print("----------------------------------------")
	print("----------------------------------------")
	insert_news_query = """
	INSERT INTO News
	(title, description, link)
	VALUES ( %s, %s, %s )
	"""
	news_records = [
		(title, desc, link),
	]
	cursor.executemany(insert_news_query, news_records)
	cnx.commit()


# CYBER SECURITY NEWS ARTICLES FOR "CERT.RO"
source = requests.get('https://dnsc.ro/').text
soup = BeautifulSoup(source, 'lxml')
articles = soup.find_all("div", {"class": "container-art-pp"})
print("___________START OF CERT RO_______________")
number = 0
for article in articles:
	number += 1
	print("-----------------")
	x = article
	xa = x.a
	xp = x.p
	link = xa['href']
	xp.a.decompose()
	desc = xp.string
	desc = re.sub(' +', ' ', desc)
	desc = desc.lstrip()
	title = "CERT RO Title " + str(number)
	print(desc)
	print(link)
	print("-----------------")
	if not title:
		title = "Title not found"
	if not desc:
		desc = "Desc not found"
	if not link:
		link = "Link not found"

	insert_news_query = """
	INSERT INTO News
	(title, description, link)
	VALUES ( %s, %s, %s )
	"""
	news_records = [
		(title, desc, link),
	]
	cursor.executemany(insert_news_query, news_records)
	cnx.commit()


