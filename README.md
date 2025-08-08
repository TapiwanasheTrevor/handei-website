# Handei Zimbabwe Website

A modern tourism website for Zimbabwe featuring popular destinations, activities, and travel information.

## 🌍 Live Demo

Visit: [https://handei-website.onrender.com](https://handei-website.onrender.com) (once deployed)

## 🚀 Features

- **Modern Next.js Frontend**: Fast, responsive tourism website
- **Laravel Backend**: Robust API and admin panel
- **Filament Admin**: Beautiful admin interface for content management
- **Docker Support**: Easy deployment and development
- **Responsive Design**: Works perfectly on all devices
- **SEO Optimized**: Built with tourism SEO best practices

## 📋 Prerequisites

- PHP 8.2+
- Node.js 20+
- Composer
- Docker (for containerized deployment)
- MySQL/PostgreSQL

## 🛠️ Local Development

### Option 1: Traditional Setup

```bash
# Clone the repository
git clone https://github.com/TapiwanasheTrevor/handei-website.git
cd handei-website

# Install PHP dependencies
composer install

# Install Node dependencies
npm install

# Copy environment file
cp .env.example .env

# Generate application key
php artisan key:generate

# Set up database
php artisan migrate
php artisan db:seed

# Build frontend assets
npm run build

# Install and build Next.js app
cd resources/js/landing
npm install
npm run build
cd ../../..

# Start development servers
php artisan serve # Laravel on http://localhost:8000
cd resources/js/landing && npm run dev # Next.js on http://localhost:3000
```

### Option 2: Docker Setup

```bash
# Clone the repository
git clone https://github.com/TapiwanasheTrevor/handei-website.git
cd handei-website

# Copy environment file
cp .env.example .env

# Build and start containers
docker-compose up -d

# Run migrations
docker-compose exec app php artisan migrate
docker-compose exec app php artisan db:seed

# Access the application
# Website: http://localhost:8080
# phpMyAdmin: http://localhost:8081
```

## 🚀 Deployment on Render

1. Fork this repository
2. Create a Render account at [render.com](https://render.com)
3. Connect your GitHub repository
4. Render will automatically detect the `render.yaml` file
5. Configure environment variables in Render dashboard
6. Deploy!

See [DEPLOYMENT.md](DEPLOYMENT.md) for detailed deployment instructions.

## 📁 Project Structure

```
handei-website/
├── app/                    # Laravel application logic
├── database/              # Database migrations and seeders
├── public/                # Public assets and entry point
├── resources/
│   ├── js/
│   │   └── landing/      # Next.js frontend application
│   └── views/            # Laravel blade views
├── routes/               # API and web routes
├── docker/               # Docker configuration files
├── .github/              # GitHub Actions workflows
├── Dockerfile            # Docker container definition
├── docker-compose.yml    # Docker compose configuration
└── render.yaml          # Render deployment configuration
```

## 🔧 Configuration

### Environment Variables

Key environment variables to configure:

- `APP_KEY`: Laravel application key
- `DB_*`: Database connection settings
- `MAIL_*`: Email configuration
- `CONTACT_*`: Contact information

### Contact Information

Current contact details:
- **Address**: 72 West Road, Avondale, Harare, Zimbabwe
- **Phone**: +263 719 050 207 / +263 785 995 280
- **Email**: info@handeizimbabwe.com

## 🧪 Testing

```bash
# Run Laravel tests
php artisan test

# Run Next.js tests
cd resources/js/landing
npm run lint
npm run test
```

## 📦 Technologies Used

- **Backend**: Laravel 11, PHP 8.2
- **Frontend**: Next.js 14, React 18, TypeScript
- **UI Components**: shadcn/ui, Tailwind CSS
- **Admin Panel**: Filament 3
- **Database**: MySQL/PostgreSQL
- **Containerization**: Docker
- **CI/CD**: GitHub Actions
- **Deployment**: Render

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is proprietary software for Handei Zimbabwe.

## 📞 Contact

**Handei Zimbabwe**
- Website: [handeizimbabwe.com](https://handeizimbabwe.com)
- Email: info@handeizimbabwe.com
- Phone: +263 719 050 207 / +263 785 995 280
- Address: 72 West Road, Avondale, Harare, Zimbabwe

## 🙏 Acknowledgments

- Zimbabwe Tourism Authority
- All contributors and partners
- Open source community