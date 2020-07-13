# Generated by Django 3.0.7 on 2020-07-13 11:30

import core.utils
import core.validators
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('core', '0009_auto_20200702_1928'),
    ]

    operations = [
        migrations.AlterModelOptions(
            name='prize',
            options={'ordering': ['order'], 'verbose_name': 'prize', 'verbose_name_plural': 'prizes'},
        ),
        migrations.AlterModelOptions(
            name='raffle',
            options={'ordering': ['-draw_datetime'], 'verbose_name': 'raffle', 'verbose_name_plural': 'raffles'},
        ),
        migrations.RemoveField(
            model_name='texteditorimage',
            name='location',
        ),
        migrations.AddField(
            model_name='texteditorimage',
            name='file',
            field=models.ImageField(default='placeholder', upload_to=core.utils.GenerateUniqueFilename('text_editor_images/'), validators=[core.validators.validate_image_size]),
            preserve_default=False,
        ),
    ]
