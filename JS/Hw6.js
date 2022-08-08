class Human {
    constructor(height, weight, name, year, gender, disability) {
        this.height = height;
        this.weight = weight;
        this.name = name;
        this.year = year;
        this.gender = gender;
        this.disability = disability;
    }

    sayHi() {
        return `Привет, меня зовут ${this.name}`;
    }


    get getInfo() {
        const info = {
            height: this.height,
            weight: this.weight,
            name: this.name,
            year: this.year,
            gender: this.gender,
            disability: this.disability
        }
    }

    set setNewName(name) {
        this.name = name;
    }

    set setNewDisability(disability) {
        this.disability = disability;
    }
}

const firstMan = new Human(180, 70, 'Vitalii', new Date('1997-12-23'), 'male', true);
console.log(firstMan, 'firstMan');
firstMan.getInfo;
console.log(firstMan.sayHi());

//================================================================================================//
class FrontendDeveloper extends Human {
    constructor(height, weight, name, year, gender, disability, careerStart, previousCompanies,) {
        super(height, weight, name, year, gender, disability);
        this.careerStart = careerStart;
        this.previousCompanies = [
            {
                start: new Date(2021, 5, 5),
                end: new Date(214, 7, 15),
                salaryPerMonth: 500,
                position: 'middle',
                companyName: 'Oracle',
            }, {
                start: new Date(2014, 7, 16),
                end: new Date(2018, 3, 15),
                salaryPerMonth: 1700,
                position: 'junior',
                companyName: 'ATB',
            }, {
                start: new Date(2018, 3, 16),
                end: new Date(2022, 8, 3),
                salaryPerMonth: 2500,
                position: 'senior',
                companyName: 'Ashan',
            }
        ];
    }

    sayHello() {
        console.log(`${super.sayHi()},я Фронтенд разработчик. Работаю с ${this.careerStart}`);
    }

    allSalary() {
        let allSalaryInCompany;
        this.previousCompanies.forEach((el) => {
            let allMonthInYears = (el.end.getFullYear() - el.start.getFullYear()) * 12;
            let allWorkMonth = allMonthInYears + (el.end.getMonth() - el.start.getMonth());

            allSalaryInCompany = allWorkMonth * el.salaryPerMonth;

        })
        console.log(allSalaryInCompany, 'Деньги заработаные за всю карьеру');
    }

    get searchCompany() {
        let nameCompany = prompt('Введите имя компании ', 'ATB');
        this.previousCompanies.filter((el) => {
            if (el.companyName === nameCompany) {
                console.log((el));
            }
        });
    }

    setNewCompany(newCompany) {
        this.previousCompanies.push(newCompany);
        console.log(this.previousCompanies);
    }

}

const firstDeveloper = new FrontendDeveloper(175, 120, 'Sergio', new Date('1990-02-23'), 'male', true, new Date('2012-05-05'));
console.log(firstDeveloper);
firstDeveloper.sayHello();
firstDeveloper.allSalary();
firstDeveloper.searchCompany;
let newWork = {
    start: new Date(),
    end: new Date(),
    salaryPerMonth: 9000,
    position: 'junior',
    companyName: 'Silpo',
}
firstDeveloper.setNewCompany(newWork);
//================================================================================================//
class Builder extends Human {
    constructor(name, ageOfBirth, weight, height, gender, invalid,buildLocation, setOfTools, workSpeed) {
        super(name, ageOfBirth, weight, height, gender, invalid);

        this.buildLocation = buildLocation;
        this.setOfTools =  setOfTools;
        this.workSpeed = workSpeed;
    }
    buildHouse () {
        let buildDay = +prompt('Введите количество м2','100');
        let hourTime = (buildDay * this.workSpeed) / 60;

        let day = 0;
        let week = 0;
        let month = 0;
        let year = 0;

        if (hourTime < 24) {
            console.log(`На стройку уйдет ${hourTime} часов !`);
        }else if (hourTime >= 24 && hourTime <= 168) {
            day = (hourTime / 24).toString();

            hourTime = day[2] || 0;

            console.log(`На стройку уйдет ${parseInt(day)} дней и ${hourTime} часов!`);
        } else if (hourTime >= 168 && hourTime < 730) {
            week = (hourTime / 168).toString();

            day = week[2];
            hourTime = week[3];
            console.log(`На стройку уйдет ${parseInt(week)} недель, ${day} дней и ${hourTime} часов!`);
        } else if ( hourTime >= 730 && hourTime < 8760) {
            month = (hourTime / 730).toString();
            week = month[2];
            day = month[3];
            hourTime = month[4];

            console.log(`На стройку уйдет ${parseInt(month)} месяцев, ${week} недель, ${day} дней и ${hourTime} часов!`);
        } else  {
            year = (hourTime / 8760).toString()
            month = year[2];
            week = year[3];
            day = year [4];
            hourTime = year[5];
            console.log(`На стройку уйдет ${parseInt(year)} лет, ${month} месяцев, ${week} недель, ${day} дней и ${hourTime} часов!`);
        }

    }

}

let firstBuilder = new Builder
('Anton',new Date (1985, 5, 12), 55,190,'male','false','Mariupol',['Кирка','Топор'],90)

console.log(firstBuilder);
firstBuilder.buildHouse()