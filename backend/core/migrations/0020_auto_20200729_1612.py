# Generated by Django 3.0.7 on 2020-07-29 19:12

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('core', '0019_auto_20200728_0024'),
    ]

    operations = [
        migrations.CreateModel(
            name='EmailConfiguration',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('sender', models.CharField(blank=True, max_length=255, null=True)),
                ('welcome_template', models.CharField(blank=True, max_length=255, null=True)),
            ],
            options={
                'verbose_name': 'Email Configuration',
            },
        ),
        migrations.AlterModelOptions(
            name='blockdata',
            options={'ordering': ['raffle', '-order'], 'verbose_name': 'block data', 'verbose_name_plural': 'block data'},
        ),
    ]
