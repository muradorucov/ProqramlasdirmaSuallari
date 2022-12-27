## Python Araşdırma Sualları

#### Sual 01

List, tuple və range arasındakı fərqlər nədir?

#### Sual 02

While və for dövrləri arasındakı fərqlər nələrdir?

#### Sual 03

Listlərdə append və insert metodları arasındakı fərqlər nələrdir?

#### Sual 04

List metodları hansılardır? Ətraflı izah edin.

#### Sual 05

Scope nədir?

#### Sual 06

Python-da //, % və ** operatorlarını izah edin.

#### Sual 07

Məntiqi operatorları izah edin.

#### Sual 08

String-in uzunluğunu necə hesablamaq olar?

#### Sual 09

Listdən sonuncu elementi necə silmək olar?

#### Sual 10

String-in ilk hərfini necə böyük hərflə yazmaq olar?

#### Sual 11

Python module nədir?

#### Sual 12

Python package nədir?

#### Sual 13

Python ```py __init__.py``` faylı nə üçün istifadə edilir?

#### Sual 14

Virtual Environment nədir? Nə üçün istifadə olunur?

#### Sual 15

Pythonda olan data tiplərindən hansıları JavaScript və C#-da da var?

#### Sual 16

Pythonda neçə tip operator var?

#### Sual 17

Type Conversion nədir və niyə ehtiyac duyuruq?

#### Sual 18

Python "+" operatoru fərqli data tipləri ilə necə işləyir?

#### Sual 19

Biz niyə dataları tiplərə bölürük?

#### Sual 20

Implicit və Explicit type conversion nədir?

#### Sual 21

Neçə ədəd tip çevirmə metodu mövcuddur?

#### Sual 22

Tip çevirmə sadəcə Python dilinə xas xüsusiyyətdir, yoxsa digər dillərdə də mövcuddur?

#### Sual 23

Müqayisə operatorları və şərtlər arasında əlaqə necə qurulur?

#### Sual 24

Indentation nədir? Python sintaksisində əhəmiyyəti nədir?

#### Sual 25

Built-in və custom funksiya ifadələri nə deməkdir?

#### Sual 26

`if`, `elif`, `else` hansı hallarda istifadə olunur?

#### Sual 27

List və Dictionary arasındakı fərqlər nələrdir?

#### Sual 28

Polimorfizm nədir?

#### Sual 29

Inheritance nədir?

#### Sual 30

Atribut ve metod arasında hansı fərqlər var?

#### Sual 31

Python data tipləri hansılardır? Bir proqramlaşdırma dili üçün niyə dataları fərqli kategoriyalara ayırma ehtiyacı hissedirik

#### Sual 32

Python interpreter bir dildir.Interpreter dillərin xüsusiyyətləri nədir? 

#### Sual 33 

Python variable adlandırma qaydaları hansılardır? Variable-lara ad verərkən diqqət olunacaq məqamları qeyd edin

#### Sual 34

PySide6 package üçün aşağıdakı modulların nə işə yaradığını qeyd edin
- QtCore
- QtWidgets
- QtGui

#### Sual 35

PySide6 package üçün aşağıdakı Classların nə işə yaradığını və başlıca metodlarını qeyd edin
- QWidget
- QTimeEdit 
- QTabWidget
- QPushButton
- QMenu
- QLabel
- QComboBox
- QScrollArea

#### Sual 36

```py
a=input("A ədədini daxil edin :")
b=7
b=input("B ədədini daxil edin :")
a=5
print(a+b)
```

Yuxarıdakı kod blokuna əsasən istifadəçi ekrandan a üçün 34 və b üçün 45 daxil edir.Nəticə nə olacaq səbəbini izah edin

#### Sual 37
```py
a=int('4')+5<6
b=int(input('Eded daxil edin :'))

print(a+b)
```

Yuxarıdakı kod blokuna əsasən istifadəçi ekrandan b üçün istifadəçi True daxil edir.Nəticə nə olacaq səbəbini izah edin

#### Sual 38

```py
a=5
b=6
a=a+b
b+=b
b=a
a=b

print(a+b)

```

Nəticə nə olacaq? Hər sətri analiz edərək hansı proses getdiyini izah edin.

#### Sual 39

```py
a=input("Dəyər daxil edin: ")
if a:
    print('Sual 39 maraqlıdır')
else:
    print('Sual 39 maraqsızdır')

```

Bu kodun nəticəsi hansı hallarda **'Sual 39 maraqsızdır'** nəticəsini verəcək və səbəbini izah edin.

#### Sual 40

```py

def Foo():

Foo()

```

Bu kod error verəcək.Errorun səbəbini izah edin

#### Sual 41

```py

def Foo():
    def Bar():
        Foo()
Foo()

```

Nəticə nə olacaq? Səbəbini izah edin

#### Sual 42

```py

def Foo():
    return Foo
Bar=Foo()

Bar()

```

Nəticə nə olacaq? Səbəbini izah edin

#### Sual 43

```py
ededler=[23,45,12,78,34,89]
def isEven(a):
    return a%2==0

i=0
while i<len(ededler):
    if isEven(ededler[i]):
        print("Eded Cutdur")
    else:
        print("Eded Tekdir")
    i+=1

```

Yuxarıda qeyd olunan kod blokunu debug edərək hər sətirdə hansı prosesin getdiyini yazın

#### Sual 44

```py
def Foo(x):
    def Bar(x):
        return x+5
    y=Bar
    return y(x)

Foo(13)
```
Yuxarıda qeyd olunan kod blokunu debug edərək hər sətirdə hansı prosesin getdiyini yazın

#### Sual 45

```py

```











