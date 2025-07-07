import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Icon from "@/components/ui/icon";

const Index = () => {
  const [isRegistering, setIsRegistering] = useState(false);

  return (
    <div className="min-h-screen bg-[#36393F] text-white font-['Source_Sans_Pro']">
      {/* Header */}
      <header className="bg-[#2F3136] border-b border-[#40444B] px-6 py-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <div className="w-10 h-10 bg-[#5865F2] rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-xl">G</span>
            </div>
            <h1 className="text-2xl font-bold">GEKURKA</h1>
          </div>
          <nav className="flex items-center space-x-6">
            <a
              href="#features"
              className="hover:text-[#5865F2] transition-colors"
            >
              Функции
            </a>
            <a
              href="#streaming"
              className="hover:text-[#5865F2] transition-colors"
            >
              Стриминг
            </a>
            <a
              href="#download"
              className="hover:text-[#5865F2] transition-colors"
            >
              Скачать
            </a>
            <Button
              onClick={() => setIsRegistering(!isRegistering)}
              className="bg-[#5865F2] hover:bg-[#4752C4] text-white"
            >
              {isRegistering ? "Войти" : "Регистрация"}
            </Button>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-6 text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-[#5865F2] to-[#7289DA] bg-clip-text text-transparent">
            Место для геймеров и стримеров
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Создавай чаты, стримь игры, общайся с друзьями и делись видео. Всё
            что нужно для игрового сообщества в одном месте.
          </p>
          <div className="flex justify-center space-x-4">
            <Button
              size="lg"
              className="bg-[#5865F2] hover:bg-[#4752C4] text-white px-8"
            >
              <Icon name="Download" className="mr-2" size={20} />
              Скачать для Windows
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-[#5865F2] text-[#5865F2] hover:bg-[#5865F2] hover:text-white px-8"
            >
              Открыть в браузере
            </Button>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section id="features" className="py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <h3 className="text-3xl font-bold text-center mb-12">
            Возможности GEKURKA
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="bg-[#2F3136] border-[#40444B] text-white">
              <CardHeader className="text-center">
                <Icon
                  name="MessageCircle"
                  size={40}
                  className="mx-auto mb-4 text-[#5865F2]"
                />
                <CardTitle>Чаты</CardTitle>
                <CardDescription className="text-gray-400">
                  Текстовые и голосовые каналы для общения
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="bg-[#2F3136] border-[#40444B] text-white">
              <CardHeader className="text-center">
                <Icon
                  name="Video"
                  size={40}
                  className="mx-auto mb-4 text-[#5865F2]"
                />
                <CardTitle>Видео-звонки</CardTitle>
                <CardDescription className="text-gray-400">
                  Качественные видео-чаты как в Discord
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="bg-[#2F3136] border-[#40444B] text-white">
              <CardHeader className="text-center">
                <Icon
                  name="Radio"
                  size={40}
                  className="mx-auto mb-4 text-[#5865F2]"
                />
                <CardTitle>Стриминг</CardTitle>
                <CardDescription className="text-gray-400">
                  Трансляции игр и контента
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="bg-[#2F3136] border-[#40444B] text-white">
              <CardHeader className="text-center">
                <Icon
                  name="Search"
                  size={40}
                  className="mx-auto mb-4 text-[#5865F2]"
                />
                <CardTitle>Поиск</CardTitle>
                <CardDescription className="text-gray-400">
                  Найди друзей и интересный контент
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Chat Interface Preview */}
      <section className="py-16 px-6 bg-[#2F3136]">
        <div className="max-w-6xl mx-auto">
          <h3 className="text-3xl font-bold text-center mb-12">
            Интерфейс чата
          </h3>
          <div className="grid lg:grid-cols-3 gap-6">
            {/* Server List */}
            <Card className="bg-[#36393F] border-[#40444B] text-white">
              <CardHeader>
                <CardTitle className="text-lg">Серверы</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-center space-x-3 p-2 rounded hover:bg-[#40444B] cursor-pointer">
                  <Avatar className="w-8 h-8">
                    <AvatarFallback className="bg-[#5865F2] text-white">
                      CS
                    </AvatarFallback>
                  </Avatar>
                  <span>CS:GO Клан</span>
                </div>
                <div className="flex items-center space-x-3 p-2 rounded hover:bg-[#40444B] cursor-pointer">
                  <Avatar className="w-8 h-8">
                    <AvatarFallback className="bg-[#7289DA] text-white">
                      DF
                    </AvatarFallback>
                  </Avatar>
                  <span>Dota Фанаты</span>
                </div>
                <div className="flex items-center space-x-3 p-2 rounded hover:bg-[#40444B] cursor-pointer">
                  <Avatar className="w-8 h-8">
                    <AvatarFallback className="bg-[#57F287] text-white">
                      MC
                    </AvatarFallback>
                  </Avatar>
                  <span>Minecraft</span>
                </div>
              </CardContent>
            </Card>

            {/* Channel List */}
            <Card className="bg-[#36393F] border-[#40444B] text-white">
              <CardHeader>
                <CardTitle className="text-lg">Каналы</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="space-y-2">
                  <div className="text-sm text-gray-400 uppercase tracking-wider">
                    Текстовые
                  </div>
                  <div className="flex items-center space-x-2 p-2 rounded hover:bg-[#40444B] cursor-pointer">
                    <Icon name="Hash" size={16} />
                    <span>общий</span>
                  </div>
                  <div className="flex items-center space-x-2 p-2 rounded hover:bg-[#40444B] cursor-pointer">
                    <Icon name="Hash" size={16} />
                    <span>игры</span>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="text-sm text-gray-400 uppercase tracking-wider">
                    Голосовые
                  </div>
                  <div className="flex items-center space-x-2 p-2 rounded hover:bg-[#40444B] cursor-pointer">
                    <Icon name="Volume2" size={16} />
                    <span>Основной</span>
                    <Badge variant="secondary" className="ml-auto">
                      2
                    </Badge>
                  </div>
                  <div className="flex items-center space-x-2 p-2 rounded hover:bg-[#40444B] cursor-pointer">
                    <Icon name="Volume2" size={16} />
                    <span>Игровой</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Chat Messages */}
            <Card className="bg-[#36393F] border-[#40444B] text-white">
              <CardHeader>
                <CardTitle className="text-lg"># общий</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start space-x-3">
                  <Avatar className="w-8 h-8">
                    <AvatarFallback className="bg-[#5865F2] text-white">
                      А
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <div className="flex items-center space-x-2">
                      <span className="font-semibold">Андрей</span>
                      <span className="text-xs text-gray-400">15:30</span>
                    </div>
                    <p className="text-sm mt-1">Кто играет в CS:GO?</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Avatar className="w-8 h-8">
                    <AvatarFallback className="bg-[#57F287] text-white">
                      М
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <div className="flex items-center space-x-2">
                      <span className="font-semibold">Мария</span>
                      <span className="text-xs text-gray-400">15:32</span>
                    </div>
                    <p className="text-sm mt-1">Я готова! Создавай лобби</p>
                  </div>
                </div>
                <div className="flex items-center space-x-2 p-2 bg-[#40444B] rounded">
                  <Input
                    placeholder="Сообщение #общий"
                    className="bg-transparent border-none focus:ring-0 text-white placeholder-gray-400"
                  />
                  <Button size="sm" className="bg-[#5865F2] hover:bg-[#4752C4]">
                    <Icon name="Send" size={16} />
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Streaming Section */}
      <section id="streaming" className="py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <h3 className="text-3xl font-bold text-center mb-12">
            Стриминг и трансляции
          </h3>
          <div className="grid lg:grid-cols-2 gap-8">
            <div>
              <img
                src="/img/1ee15bea-7a14-4209-94bd-7fb203dd2159.jpg"
                alt="Streaming interface"
                className="rounded-lg shadow-lg"
              />
            </div>
            <div className="space-y-6">
              <h4 className="text-2xl font-bold">Стримь с легкостью</h4>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <Icon name="Play" size={20} className="text-[#5865F2] mt-1" />
                  <div>
                    <h5 className="font-semibold">Мгновенный стриминг</h5>
                    <p className="text-gray-400">
                      Начни трансляцию одним кликом
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Icon
                    name="Users"
                    size={20}
                    className="text-[#5865F2] mt-1"
                  />
                  <div>
                    <h5 className="font-semibold">
                      Зрители в реальном времени
                    </h5>
                    <p className="text-gray-400">
                      Видь кто смотрит и общайся с ними
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Icon
                    name="Monitor"
                    size={20}
                    className="text-[#5865F2] mt-1"
                  />
                  <div>
                    <h5 className="font-semibold">Демонстрация экрана</h5>
                    <p className="text-gray-400">
                      Дели экран или отдельные окна
                    </p>
                  </div>
                </div>
              </div>
              <Button className="bg-[#5865F2] hover:bg-[#4752C4] text-white">
                <Icon name="Radio" className="mr-2" size={20} />
                Начать стрим
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Registration Form */}
      <section className="py-16 px-6 bg-[#2F3136]">
        <div className="max-w-md mx-auto">
          <Card className="bg-[#36393F] border-[#40444B] text-white">
            <CardHeader className="text-center">
              <CardTitle className="text-2xl">
                {isRegistering ? "Регистрация" : "Вход"}
              </CardTitle>
              <CardDescription className="text-gray-400">
                {isRegistering
                  ? "Создай аккаунт в GEKURKA"
                  : "Войди в свой аккаунт"}
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <label className="text-sm font-medium">Email</label>
                <Input
                  type="email"
                  placeholder="твой@email.com"
                  className="bg-[#40444B] border-[#40444B] text-white placeholder-gray-400"
                />
              </div>
              {isRegistering && (
                <div className="space-y-2">
                  <label className="text-sm font-medium">
                    Имя пользователя
                  </label>
                  <Input
                    placeholder="Твой никнейм"
                    className="bg-[#40444B] border-[#40444B] text-white placeholder-gray-400"
                  />
                </div>
              )}
              <div className="space-y-2">
                <label className="text-sm font-medium">Пароль</label>
                <Input
                  type="password"
                  placeholder="Пароль"
                  className="bg-[#40444B] border-[#40444B] text-white placeholder-gray-400"
                />
              </div>
              <Button className="w-full bg-[#5865F2] hover:bg-[#4752C4] text-white">
                {isRegistering ? "Создать аккаунт" : "Войти"}
              </Button>
              <p className="text-center text-sm text-gray-400">
                {isRegistering ? "Уже есть аккаунт?" : "Нет аккаунта?"}
                <button
                  onClick={() => setIsRegistering(!isRegistering)}
                  className="text-[#5865F2] hover:underline ml-1"
                >
                  {isRegistering ? "Войти" : "Зарегистрироваться"}
                </button>
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#23272A] py-8 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-4 mb-4 md:mb-0">
              <div className="w-8 h-8 bg-[#5865F2] rounded-full flex items-center justify-center">
                <span className="text-white font-bold">G</span>
              </div>
              <span className="text-xl font-bold">GEKURKA</span>
            </div>
            <div className="flex space-x-6 text-gray-400">
              <a href="#" className="hover:text-white transition-colors">
                Поддержка
              </a>
              <a href="#" className="hover:text-white transition-colors">
                Условия
              </a>
              <a href="#" className="hover:text-white transition-colors">
                Конфиденциальность
              </a>
            </div>
          </div>
          <div className="border-t border-[#40444B] mt-8 pt-4 text-center text-gray-400">
            <p>&copy; 2024 GEKURKA. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
