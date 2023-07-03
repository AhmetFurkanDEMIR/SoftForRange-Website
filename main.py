from flask import render_template, Flask, request, session, redirect, url_for, request
import smtplib, ssl
from email.mime.multipart import MIMEMultipart
from email.mime.text import MIMEText
from functools import wraps
from flask_recaptcha import ReCaptcha

app = Flask(__name__)
app.config['UPLOAD_PATH'] = 'static/uploads'
app.secret_key = b'_5#y2L"F4Q8z\n\xec]/'
app.config['RECAPTCHA_SITE_KEY'] = '6LeKjL0gAAAAALvY1-aAduFIChKoEQEP2mBstv6T' # <-- Add your site key
app.config['RECAPTCHA_SECRET_KEY'] = '6LeKjL0gAAAAANAbNRkXyBao3DoyKjODTVRD4ew3' # <-- Add your secret key
recaptcha = ReCaptcha(app)

def flagReq(f):

    @wraps(f)
    def decorated_function(*args, **kwargs):

        if "flag" in session:
            return f(*args, **kwargs)

        else:

            return f(*args, **kwargs)

    return decorated_function


@app.route("/",methods = ['GET', 'POST'])
@flagReq
def main():

    try:

        print(session["flag"])

    except:

        return render_template("/index.html")


    if int(session["flag"])==1:

        flag = session["flag"]
        flagText = session["flagText"]
        flagStatus = session["flagStatus"]

        session["flag"] = 999
        session.clear()

        return render_template("/index.html",flag=flag, flagStatus=flagStatus, flagText=flagText)

    else:

        return render_template("/index.html")


@app.route("/send",methods = ['GET', 'POST'])
@flagReq
def send():

    if request.method == "POST":

        flagText=""
        flagStatus=""
        flag=999


        if recaptcha.verify()==False:

            session["flagText"]= "Teklifiniz İletilemedi, Robot Olduğunuzu Tespit Ettik."
            session["flagStatus"]="Hata!"
            session["flag"]=1

            return redirect(url_for("main"))

        modalType = request.form['modalType']

        if str(modalType)=="KisiselTeklifAl":

            try:

                ad = request.form['ad']
                soyad = request.form['soyad']
                telNo = request.form['telNo']
                eMail = request.form['eMail']
                sayfasayisi = request.form['sayfasayisi']
                butce = request.form['butce']
                digeristekler = request.form['digeristekler']

                siteTuru = request.form['web']

                stringMail = "Ad : " + ad + ", Soyadı : " + soyad
                stringMail += "\n\nTelefon numarası : " + telNo + ", Mail adresi : " + eMail

                stringMail += "\n\nSite turu : " + siteTuru

                stringMail += "\n\nSayfa sayısı : " + sayfasayisi + ", Bütce : " + butce

                stringMail += "\n\nDiger istekler : " + digeristekler

                konu = "Kişisel Web Site Teklif"
                ileti = stringMail
                gonderenMail = 'softforrange@yandex.com'
                gonderilenMail = "softforrange@yandex.com"
                sifre = '***'
                message = MIMEMultipart()
                message["From"] = gonderenMail
                message["To"] = gonderilenMail
                message["Subject"] = konu
                message["Bcc"] = gonderilenMail
                message.attach(MIMEText(ileti, "plain"))
                yazi = message.as_string()
                context = ssl.create_default_context()

                with smtplib.SMTP_SSL("smtp.yandex.com", 465, context=context) as server:
                    server.login(gonderenMail, sifre)
                    server.sendmail(gonderenMail, gonderilenMail, yazi)

                flagText="Teklifiniz bize iletildi, en kısa sürede dönüş yapacağız."
                flagStatus="Başarılı!"
                flag=1

            except:

                flagText="Teklif göndermede bir hata oluştu, lütfen bilgilerinizi eksiksiz girip tekrar deneyiniz"
                flagStatus="Hata!"
                flag=1 

        elif str(modalType)=="KurumsalTeklifAl":

            try:

                ad = request.form['ad']
                soyad = request.form['soyad']
                telNo = request.form['telNo']
                sirket = request.form['firma']
                eMail = request.form['eMail']
                sayfasayisi = request.form['sayfasayisi']
                butce = request.form['butce']
                digeristekler = request.form['digeristekler']

                siteTuru = request.form['web']

                stringMail = "Ad : " + ad + ", Soyadı : " + soyad
                stringMail += "\n\nTelefon numarası : " + telNo + ", Mail adresi : " + eMail
                stringMail += "\n\nSirket Hakkinda : "+str(sirket)

                stringMail += "\n\nSite turu : " + siteTuru

                stringMail += "\n\nSayfa sayısı : " + sayfasayisi + ", Bütce : " + butce

                stringMail += "\n\nDiger istekler : " + digeristekler

                konu = "Kurumsal Web Site Teklif"
                ileti = stringMail
                gonderenMail = 'softforrange@yandex.com'
                gonderilenMail = "softforrange@yandex.com"
                sifre = '***'
                message = MIMEMultipart()
                message["From"] = gonderenMail
                message["To"] = gonderilenMail
                message["Subject"] = konu
                message["Bcc"] = gonderilenMail
                message.attach(MIMEText(ileti, "plain"))
                yazi = message.as_string()
                context = ssl.create_default_context()

                with smtplib.SMTP_SSL("smtp.yandex.com", 465, context=context) as server:
                    server.login(gonderenMail, sifre)
                    server.sendmail(gonderenMail, gonderilenMail, yazi)

                flagText="Teklifiniz bize iletildi, en kısa sürede dönüş yapacağız."
                flagStatus="Başarılı!"
                flag=1

            except:
                
                flagText="Teklif göndermede bir hata oluştu, lütfen bilgilerinizi eksiksiz girip tekrar deneyiniz"
                flagStatus="Hata!"
                flag=1    
        
        elif str(modalType)=="OzelTeklifAl":

            try:

                ad = request.form['ad']
                soyad = request.form['soyad']
                telNo = request.form['telNo']
                sirket = request.form['firma']
                eMail = request.form['eMail']

                sistem = request.form['sistem']

                butce = request.form['butce']
                siteTuru = request.form['web']

                stringMail = "Ad : " + ad + ", Soyadı : " + soyad
                stringMail += "\n\nTelefon numarası : " + telNo + ", Mail adresi : " + eMail
                stringMail += "\n\nSirket Hakkinda : "+str(sirket)

                stringMail += "\n\nSite turu : " + siteTuru

                stringMail += "\n\nBütce : " + butce

                stringMail += "\n\nSistemin Çalışma Prensibi : " + sistem

                konu = "Özel Yazılım Teklif"
                ileti = stringMail
                gonderenMail = 'softforrange@yandex.com'
                gonderilenMail = "softforrange@yandex.com"
                sifre = '***'
                message = MIMEMultipart()
                message["From"] = gonderenMail
                message["To"] = gonderilenMail
                message["Subject"] = konu
                message["Bcc"] = gonderilenMail
                message.attach(MIMEText(ileti, "plain"))
                yazi = message.as_string()
                context = ssl.create_default_context()

                with smtplib.SMTP_SSL("smtp.yandex.com", 465, context=context) as server:
                    server.login(gonderenMail, sifre)
                    server.sendmail(gonderenMail, gonderilenMail, yazi)

                flagText="Teklifiniz bize iletildi, en kısa sürede dönüş yapacağız."
                flagStatus="Başarılı!"
                flag=1

            except:
                
                flagText="Teklif göndermede bir hata oluştu, lütfen bilgilerinizi eksiksiz girip tekrar deneyiniz"
                flagStatus="Hata!"
                flag=1        
        
        elif str(modalType)=="SosyalTeklifAl":

            try:

                ad = request.form['ad']
                soyad = request.form['soyad']
                telNo = request.form['telNo']
                sirket = request.form['firma']
                eMail = request.form['eMail']

                sistem = request.form['sistem']

                butce = request.form['butce']
                sosyalMecra = request.form.getlist('web')
                tasarimTuru = request.form.getlist('tasarim')


                if len(sosyalMecra)==0:

                    flagText="Lütfen tasarim istediğiniz Sosyal Mecraları işaretleyiniz."
                    flagStatus="Hata!"
                    flag=1

                    session["flagText"]=flagText
                    session["flagStatus"]=flagStatus
                    session["flag"]=1

                    return redirect(url_for("main"))

                elif len(tasarimTuru)==0:

                    flagText="Lütfen talep ettiğiniz Video&Animasyon türlerini işaretleyiniz."
                    flagStatus="Hata!"
                    flag=1

                    session["flagText"]=flagText
                    session["flagStatus"]=flagStatus
                    session["flag"]=1

                    return redirect(url_for("main"))

                stringMail = "Ad : " + ad + ", Soyadı : " + soyad
                stringMail += "\n\nTelefon numarası : " + telNo + ", Mail adresi : " + eMail
                stringMail += "\n\nSirket Hakkinda : "+sirket

                stringMail += "\n\nSosyal Mecra : " + str(sosyalMecra) +", Tasarim Türü : " + str(tasarimTuru)

                stringMail += "\n\nBütce : " + butce

                stringMail += "\n\nSosyal medya talepler : " + sistem

                konu = "Sosyal Medya Teklif"
                ileti = stringMail
                gonderenMail = 'softforrange@yandex.com'
                gonderilenMail = "softforrange@yandex.com"
                sifre = '***'
                message = MIMEMultipart()
                message["From"] = gonderenMail
                message["To"] = gonderilenMail
                message["Subject"] = konu
                message["Bcc"] = gonderilenMail
                message.attach(MIMEText(ileti, "plain"))
                yazi = message.as_string()
                context = ssl.create_default_context()

                with smtplib.SMTP_SSL("smtp.yandex.com", 465, context=context) as server:
                    server.login(gonderenMail, sifre)
                    server.sendmail(gonderenMail, gonderilenMail, yazi)

                flagText="Teklifiniz bize iletildi, en kısa sürede dönüş yapacağız."
                flagStatus="Başarılı!"
                flag=1

            except:
                
                flagText="Teklif göndermede bir hata oluştu, lütfen bilgilerinizi eksiksiz girip tekrar deneyiniz"
                flagStatus="Hata!"
                flag=1
        
        
        elif str(modalType)=="VideoAnimasyonTeklifAl":

            try:

                ad = request.form['ad']
                soyad = request.form['soyad']
                telNo = request.form['telNo']
                eMail = request.form['eMail']

                sirket = request.form['firma']

                sistem = request.form['sistem']

                butce = request.form['butce']
                tasarimTuru = request.form.getlist('tasarim')

                if len(tasarimTuru)==0:

                    flagText="Lütfen talep ettiğiniz Video&Animasyon türlerini işaretleyiniz."
                    flagStatus="Hata!"
                    flag=1

                    session["flagText"]=flagText
                    session["flagStatus"]=flagStatus
                    session["flag"]=1

                    return redirect(url_for("main"))

                stringMail = "Ad : " + ad + ", Soyadı : " + soyad
                stringMail += "\n\nTelefon numarası : " + telNo + ", Mail adresi : " + eMail
                stringMail += "\n\nSirket Hakkinda : "+sirket

                stringMail += "\n\nTasarim Türü : " + str(tasarimTuru)

                stringMail += "\n\nBütce : " + butce

                stringMail += "\n\nVideo&Animasyon İçeriği : " + sistem

                konu = "Video&Animasyon Teklif"
                ileti = stringMail
                gonderenMail = 'softforrange@yandex.com'
                gonderilenMail = "softforrange@yandex.com"
                sifre = '***'
                message = MIMEMultipart()
                message["From"] = gonderenMail
                message["To"] = gonderilenMail
                message["Subject"] = konu
                message["Bcc"] = gonderilenMail
                message.attach(MIMEText(ileti, "plain"))
                yazi = message.as_string()
                context = ssl.create_default_context()

                with smtplib.SMTP_SSL("smtp.yandex.com", 465, context=context) as server:
                    server.login(gonderenMail, sifre)
                    server.sendmail(gonderenMail, gonderilenMail, yazi)

                flagText="Teklifiniz bize iletildi, en kısa sürede dönüş yapacağız."
                flagStatus="Başarılı!"
                flag=1

            except:
                
                flagText="Teklif göndermede bir hata oluştu, lütfen bilgilerinizi eksiksiz girip tekrar deneyiniz"
                flagStatus="Hata!"
                flag=1

        if str(modalType)=="EntegrasyonTeklifAl":

            try:

                ad = request.form['ad']
                soyad = request.form['soyad']
                telNo = request.form['telNo']
                eMail = request.form['eMail']

                sirket = request.form['firma']
                entegrasyonTuru = request.form['tur']

                butce = request.form['butce']
                entegreAciklama = request.form['entegreAciklama']

                stringMail = "Ad : " + ad + ", Soyadı : " + soyad
                stringMail += "\n\nTelefon numarası : " + telNo + ", Mail adresi : " + eMail

                stringMail += "\n\nSirket Hakkında : " + sirket

                if entegrasyonTuru=="Web Sitesi":

                    web_site = request.form['web_site']

                    stringMail += "\n\nEntegrasyon Turu : " + entegrasyonTuru + ", Entegre olunacak site : " + web_site

                else:

                    db = request.form['Veritabani']

                    stringMail += "\n\nEntegrasyon Turu : " + entegrasyonTuru + ", Entegre olunacak veritabanıa : " + db


                stringMail += "\n\nDiger istekler : " + entegreAciklama

                konu = "Entegrasyon Teklif"
                ileti = stringMail
                gonderenMail = 'softforrange@yandex.com'
                gonderilenMail = "softforrange@yandex.com"
                sifre = '***'
                message = MIMEMultipart()
                message["From"] = gonderenMail
                message["To"] = gonderilenMail
                message["Subject"] = konu
                message["Bcc"] = gonderilenMail
                message.attach(MIMEText(ileti, "plain"))
                yazi = message.as_string()
                context = ssl.create_default_context()

                with smtplib.SMTP_SSL("smtp.yandex.com", 465, context=context) as server:
                    server.login(gonderenMail, sifre)
                    server.sendmail(gonderenMail, gonderilenMail, yazi)

                flagText="Teklifiniz bize iletildi, en kısa sürede dönüş yapacağız."
                flagStatus="Başarılı!"
                flag=1

            except:

                flagText="Teklif göndermede bir hata oluştu, lütfen bilgilerinizi eksiksiz girip tekrar deneyiniz"
                flagStatus="Hata!"
                flag=1 
               

        elif str(modalType)=="BizeYazin":

            try:

                ad = request.form['firstname']
                soyad = request.form['lastname']
                mesaj = request.form['message']
                email = request.form['email']


                stringMail = "Ad : " + ad + ", Soyadı : " + soyad
                stringMail += "\n\nMesaj : " + mesaj
                stringMail += "\n\nE-mail : " + email
   

                konu = "SFR Bize Yazin Form"
                ileti = stringMail
                gonderenMail = 'softforrange@yandex.com'
                gonderilenMail = "softforrange@yandex.com"
                sifre = '***'
                message = MIMEMultipart()
                message["From"] = gonderenMail
                message["To"] = gonderilenMail
                message["Subject"] = konu
                message["Bcc"] = gonderilenMail
                message.attach(MIMEText(ileti, "plain"))
                yazi = message.as_string()
                context = ssl.create_default_context()

                with smtplib.SMTP_SSL("smtp.yandex.com", 465, context=context) as server:
                    server.login(gonderenMail, sifre)
                    server.sendmail(gonderenMail, gonderilenMail, yazi)


                flagText="Mesajınız bize iletildi, sizi önemsiyoruz"
                flagStatus="Başarılı!"
                flag=1

            except:
                
                flagText="Mesajınız iletilemedi, lütfen tekrar deneyiniz"
                flagStatus="Hata!"
                flag=1          

        session["flagText"]=flagText
        session["flagStatus"]=flagStatus
        session["flag"]=1

        return redirect(url_for("main"))

    else:

        return redirect(url_for("main"))

@app.route("/projects/project",methods = ['GET', 'POST'])
@flagReq
def project():

    return render_template("/projects/project0.html")

@app.route("/project/bkgsite",methods = ['GET', 'POST'])
@flagReq
def bkgsite():

    return render_template("/projects/projectbkgsite.html")

@app.route("/project/bkgsosyal",methods = ['GET', 'POST'])
@flagReq
def bkgsosyal():

    return render_template("/projects/projectbkgsosyalmedya.html")

@app.route("/project/playstation",methods = ['GET', 'POST'])
@flagReq
def ps():

    return render_template("/projects/projectplaystation.html")

@app.route("/project/bkgvideo",methods = ['GET', 'POST'])
@flagReq
def bkgvideo():

    return render_template("/projects/projectsbkgvideo.html")

@app.route("/project/selcukludamacanasosyal",methods = ['GET', 'POST'])
@flagReq
def sdsSosyal():

    return render_template("/projects/projectsdssosyalmedya.html")

@app.route("/project/selcukludamacanavideo",methods = ['GET', 'POST'])
@flagReq
def sdsVideo():

    return render_template("/projects/projectsdsvideo.html")

@app.route("/project/erdalbesikcioglu",methods = ['GET', 'POST'])
@flagReq
def kisisel0Blog():

    return render_template("/projects/erdalbesikcioglu.html")

@app.route("/project/arifisik",methods = ['GET', 'POST'])
@flagReq
def kisisel1Blog():

    return render_template("/projects/arifisik.html")


@app.route("/project/ahmetfurkandemir",methods = ['GET', 'POST'])
@flagReq
def kisisel2Blog():

    return render_template("/projects/ahmetfurkandemir.html")


@app.route("/project/onelinktr",methods = ['GET', 'POST'])
@flagReq
def onelinktr():

    return render_template("/projects/onelinktr.html")


@app.route("/website/erdalbesikcioglu",methods = ['GET', 'POST'])
@flagReq
def kisisel0():

    return render_template("/personelwebs/web0/index.html")


@app.route("/website/arifisik",methods = ['GET', 'POST'])
@flagReq
def kisisel1():

    return render_template("/personelwebs/web1/index.html")


if __name__ == "__main__":

    app.run(host="0.0.0.0", port=5600, debug=True)

