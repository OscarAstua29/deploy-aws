#!/bin/bash

# Actualizar los paquetes del sistema
echo "Actualizando el sistema..."
sudo yum update -y

# Instalar Docker
echo "Instalando Docker..."
sudo yum install -y docker

# Verificar la versión de Docker
echo "Verificando la versión de Docker..."
docker --version

# Iniciar el servicio de Docker
echo "Iniciando el servicio de Docker..."
sudo service docker start

# Añadir el usuario 'ec2-user' al grupo 'docker' para usar Docker sin sudo
echo "Añadiendo ec2-user al grupo docker..."
sudo usermod -a -G docker ec2-user

# Instalar Docker Compose
echo "Instalando Docker Compose..."
sudo curl -L https://github.com/docker/compose/releases/latest/download/docker-compose-$(uname -s)-$(uname -m) -o /usr/local/bin/docker-compose

# Hacer ejecutable el binario de Docker Compose
echo "Configurando permisos para Docker Compose..."
sudo chmod +x /usr/local/bin/docker-compose

# Verificar la versión de Docker Compose
echo "Verificando la versión de Docker Compose..."
sudo docker-compose version

# Ejecutar Docker Compose en modo 'detached' (en segundo plano)
echo "Iniciando Docker Compose..."
sudo docker-compose up -d

echo "Docker y Docker Compose han sido instalados y configurados correctamente."
